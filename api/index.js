export default function handler(req, res) {
  const { link } = req.query;

  if (!link || (!link.includes("terabox.com") && !link.includes("1024terabox.com"))) {
  return res.status(400).json({ status: "error", message: "Invalid link" });
}


  // Simulated download link (replace this logic later)
  const fakeDownloadUrl = "https://example.com/download/video.mp4";

  return res.json({
    status: "success",
    download_url: fakeDownloadUrl,
  });
}
