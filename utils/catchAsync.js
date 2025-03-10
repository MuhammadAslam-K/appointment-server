export const catchAsync = (fn) => (req, res, next) => {
    Promise
        .resolve(fn(req, res, next))
        .catch((err) => {
            console.log('===== **** ERROR FROM CATCH ASYNC **** =====', err?.message);
            return res.status(err.status || 400).json({
                success: false,
                message: err.message,
                status: err.status
            });
        });
};

