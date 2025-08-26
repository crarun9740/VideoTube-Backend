export const uploadvideo = (req, res) => {
  console.log("Selecting video to upload....");
  res.status(200).json({
    message: "Video uploaded Successfullyy",
  });
};
