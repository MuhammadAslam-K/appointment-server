import appointmentService from "../service/appointmentService.js";
import { catchAsync } from "../utils/catchAsync.js";
import { sendResponse } from "../utils/response.js";

const getSlots = catchAsync(async (req, res) => {
    const { date } = req.query;
    const response = await appointmentService.getAvailableSlots({ date });
    return sendResponse(res, response)
})

const createBooking = catchAsync(async (req, res) => {
    const { name, phone, date, time } = req.body;
    const response = await appointmentService.bookAppointment({ name, phone, date, time });
    return sendResponse(res, response)
})

export default {
    getSlots,
    createBooking,
}