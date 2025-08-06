import { fetchAllUserUrls } from "../dao/user.dao.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const getDashboardStats = wrapAsync(async (req, res) => {
  const { _id } = req.user;

  // Fetch all user URLs
  const urls = await fetchAllUserUrls(_id);

  // Calculate stats
  const totalLinks = urls.length;
  const totalClicks = urls.reduce((sum, url) => sum + url.clicks, 0);
  const activeLinks = urls.filter((url) => url.clicks > 0).length;

  // Calculate average CTR (assuming 1 view per click for simplicity)
  const averageCTR =
    totalClicks > 0 ? (totalClicks / Math.max(totalLinks, 1)) * 100 : 0;

  // Get recent activity (last 10 URLs created, sorted by creation time)
  const recentActivity = urls
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 10)
    .map((url) => ({
      id: url._id,
      action: "Link created",
      link: url.short_url,
      fullUrl: url.full_url,
      clicks: url.clicks,
      time: formatTimeAgo(url.createdAt || new Date()),
      createdAt: url.createdAt || new Date(),
      isNew: isWithinLast24Hours(url.createdAt),
    }));

  res.status(200).json({
    success: true,
    data: {
      totalLinks,
      totalClicks,
      activeLinks,
      averageCTR: Math.round(averageCTR * 10) / 10, // Round to 1 decimal
      recentActivity,
      urls: urls.slice(0, 10), // Return latest 10 URLs for the dashboard
    },
  });
});

// Helper function to format time ago
function formatTimeAgo(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }
  if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }
  const months = Math.floor(diffInSeconds / 2592000);
  return `${months} month${months === 1 ? "" : "s"} ago`;
}

// Helper function to check if date is within last 24 hours
function isWithinLast24Hours(date) {
  const now = new Date();
  const diffInHours = (now - new Date(date)) / (1000 * 60 * 60);
  return diffInHours <= 24;
}
