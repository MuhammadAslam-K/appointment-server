import express from 'express'
import { appointmentController } from '../controllers/index.js'
import validateRequest from '../middleware/validation.js';
import { createBookingSchema, getSlotsSchema } from '../validation/appointment.js';
const appointmentRouter = express.Router()


appointmentRouter.get("/slots", validateRequest(getSlotsSchema, "query"), appointmentController.getSlots);
appointmentRouter.post("/book", validateRequest(createBookingSchema, "body"), appointmentController.createBooking);

export default appointmentRouter