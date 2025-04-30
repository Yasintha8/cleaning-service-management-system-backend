import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Register a new user
export async function registerUser(req, res) {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(409).json({ message: "Username already exists" });
        }

        // Hash password
        const password_hash = await bcrypt.hash(password, 10);

        // Create and save user
        const user = new User({ username, password_hash });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Registration failed", error: err.message });
    }
}

// Login user
export async function loginUser(req, res) {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "Invalid username or password" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(403).json({ message: "Invalid username or password" });
        }

        // JWT payload
        const payload = { id: user._id, username: user.username, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "2h" });

        res.json({
            message: "Login successful",
            token,
            user: payload
        });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "username role"); // Only return needed fields
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

