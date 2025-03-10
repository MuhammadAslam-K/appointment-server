import appointmentHelper from "../helper/appointmentHelper.js";
import appointmentRepo from "../repo/appointmentRepo.js";
import { throwError } from "../utils/throwError.js";


const getAvailableSlots = async ({ date }) => {
    // Get all booked slots for the given date
    const bookedAppointments = await appointmentRepo.findAppointmentsByDate({ date });
    const bookedSlots = bookedAppointments.map((appt) => appt.time);

    // Remove booked slots from the available slots
    const availableSlots = appointmentHelper.generateTimeSlots().filter((slot) => !bookedSlots.includes(slot));
    const data = { availableSlots, date }
    return data
};


const bookAppointment = async ({ name, phone, date, time }) => {
    // Check if an appointment already exists for the same date and time
    const existingAppointment = await appointmentRepo.findAppointmentByDateAndTime({ date, time });
    if (existingAppointment) {
        throwError({ message: 'Slot already booked. Please select another time.', statusCode: 409 });
    }

    // Create the appointment only if the slot is available
    await appointmentRepo.createAppointment({ name, phone, date, time });
    return { "message": "Appointment booked successfully!" };
};

export default {
    getAvailableSlots,
    bookAppointment,
}