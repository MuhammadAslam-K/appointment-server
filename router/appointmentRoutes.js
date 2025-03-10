import express from 'express'
import { appointmentController } from '../controllers/index.js'
const appointmentRouter = express.Router()


appointmentRouter.get("/slots", appointmentController.getSlots);
appointmentRouter.post("/book", appointmentController.createBooking);

export default appointmentRouter