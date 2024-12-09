// const asyncHandler = (reqestHandler) => {
//     (err , res , res, next) => {
//         Promise.resolve(reqestHandler(req , res , next)).catch((err) => next(err))
//     }
// }

const asyncHandler = (requestHandler) => async (err, req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};

export { asyncHandler };
