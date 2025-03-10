export const sendResponse = (res, data, additional_data = {}) => {
    return res.status(200).json({
        success: true,
        data: data,
        ...additional_data
    });
};