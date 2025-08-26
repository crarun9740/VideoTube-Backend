export const videoUploadmiddleware = (req, res, next) => {
  console.log("Middleware is running for uppload video");
  next();
};
