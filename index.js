import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import verifyJWT from "./middleware/auth.js";
import dotenv from "dotenv";
import cors from "cors";
import serviceRouter from "./routes/serviceRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
dotenv.config();

const app = express();

// in here we can give what url can access our backend
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("Connected to the database");
    }
).catch(
    ()=>{
        console.log("Connection failed");
    }
)

app.use(bodyParser.json());
app.use(verifyJWT);

app.use("/api/user", userRouter);
app.use("/api/service", serviceRouter);
app.use("/api/bookings", bookingRouter);


app.listen(5000, 
    () => {
    console.log("Server is running on port 5000");
}
)