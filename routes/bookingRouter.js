import express from 'express';
import {
    createBooking,
    getAllBookings,
    getBookingsByUserId,
    updateBooking,
    deleteBooking
} from '../controllers/bookingController.js';

const bookingRouter = express.Router();

// Create a new booking
bookingRouter.post('/', createBooking);

// Get all bookings
bookingRouter.get('/', getAllBookings);

// Get a single booking by ID
bookingRouter.get("/user/:userId", getBookingsByUserId);

// Update a booking by ID
bookingRouter.put('/:id', updateBooking);

// Delete a booking by ID
bookingRouter.delete('/:id', deleteBooking);

export default bookingRouter;
