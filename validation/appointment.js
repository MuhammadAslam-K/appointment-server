import Joi from "joi";

// Validation schema for fetching available slots
export const getSlots = Joi.object({
    date: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .required()
        .messages({
            "string.pattern.base": "Date must be in YYYY-MM-DD format",
            "any.required": "Date is required"
        }),

});

// Validation schema for booking an appointment
export const createBooking = Joi.object({
    name: Joi.string().trim().min(2).max(50).required().messages({
        "string.empty": "Name is required",
        "string.min": "Name must be at least 2 characters long",
        "string.max": "Name must be at most 50 characters long",
    }),
    phone: Joi.string()
        .pattern(/^[0-9]{10}$/) // Ensures exactly 10 digits
        .required()
        .messages({
            "string.pattern.base": "Phone number must be a 10-digit number",
            "any.required": "Phone number is required"
        }),
    date: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .required()
        .messages({
            "string.pattern.base": "Date must be in YYYY-MM-DD format",
            "any.required": "Date is required"
        }),
    time: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/) // Ensures HH:MM format
        .required()
        .messages({
            "string.pattern.base": "Time must be in HH:MM format",
            "any.required": "Time is required"
        }),
});
