import Appointment from "../models/appointments.js";

const findAppointmentsByDate = async ({ date }) => await Appointment.find({ date })

const createAppointment = async ({ name, phone, date, time }) => await Appointment.create({ name, phone, date, time })

const getAllAppointments = async () => await Appointment.find()

export const findAppointmentByDateAndTime = async ({ date, time }) => await Appointment.findOne({ date, time })


export default {
    findAppointmentsByDate,
    createAppointment,
    getAllAppointments,
    findAppointmentByDateAndTime
}