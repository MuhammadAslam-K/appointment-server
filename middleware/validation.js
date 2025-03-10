const validateRequest = (schema, source = "body") => (req, res, next) => {
    const data = source === "query" ? req.query : req.body; // Determine source (query params or body)
    const { error } = schema.validate(data, { abortEarly: false });

    if (error) {
        return res.status(400).json({
            success: false,
            errors: error.details.map((detail) => detail.message),
        });
    }

    next();
};

export default validateRequest;
