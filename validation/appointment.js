import Joi from "joi";

const futureDateValidation = (value, helpers) => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    if (value <= today) {
        return helpers.message("Date must be in the future");
    }
    return value;
};

export const getSlotsSchema = Joi.object({
    date: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/) // Ensure YYYY-MM-DD format
        .required()
        .custom(futureDateValidation, "Future date validation") // Ensure future date
        .messages({
            "string.pattern.base": "Date must be in YYYY-MM-DD format",
            "any.required": "Date is required",
        }),
});


// ✅ Validation Schema for Booking an Appointment (Body Parameters)
export const createBookingSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 2 characters long",
            "string.max": "Name must be at most 50 characters long",
        }),

    phone: Joi.string()
        .pattern(/^[0-9]{10}$/) // Must be exactly 10 digits
        .required()
        .messages({
            "string.pattern.base": "Phone number must be a 10-digit number",
            "any.required": "Phone number is required",
        }),

    date: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/) // Ensure YYYY-MM-DD format
        .required()
        .custom(futureDateValidation, "Future date validation") // Ensure future date
        .messages({
            "string.pattern.base": "Date must be in YYYY-MM-DD format",
            "any.required": "Date is required",
        }),

    time: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/) // HH:MM format
        .required()
        .messages({
            "string.pattern.base": "Time must be in HH:MM format",
            "any.required": "Time is required",
        }),
});
