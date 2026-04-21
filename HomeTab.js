// ============================================
// WAYVO UTILITY FUNCTIONS
// ============================================

/**
 * Format markdown-style bold text (**text**) into React elements
 * Safely handles text without executing HTML
 */
export function formatMarkdown(text) {
  if (!text) return "";

  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>;
    }
    return part;
  });
}

/**
 * Format price with currency
 */
export function formatPrice(price, currency = "$") {
  if (price === null || price === undefined) return null;
  return `${currency}${price.toLocaleString()}`;
}

/**
 * Format number with commas
 */
export function formatNumber(num) {
  if (num === null || num === undefined) return "0";
  return num.toLocaleString();
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(original, current) {
  if (!original || !current || original <= current) return 0;
  return Math.round(((original - current) / original) * 100);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text, maxLength = 50) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "…";
}

/**
 * Debounce function
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 */
export function throttle(func, limit = 300) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Generate unique ID
 */
export function generateId(prefix = "wv") {
  return `${prefix}-${Math.floor(Math.random() * 900000 + 100000)}`;
}

/**
 * Format date relative (today, tomorrow, etc.)
 */
export function formatRelativeDate(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Tomorrow";
  if (diffDays < 7) return `In ${diffDays} days`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * Get current season based on month
 */
export function getCurrentSeason() {
  const month = new Date().getMonth(); // 0-11
  if (month >= 2 && month <= 4) return { name: "Spring", icon: "🌸", message: "Spring in Morocco — perfect timing!" };
  if (month >= 5 && month <= 7) return { name: "Summer", icon: "☀️", message: "Summer vibes — coastal escapes are ideal!" };
  if (month >= 8 && month <= 10) return { name: "Autumn", icon: "🍂", message: "Autumn — mild weather, fewer crowds!" };
  return { name: "Winter", icon: "❄️", message: "Winter — desert dawns at 15°C, perfect for trekking!" };
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element, threshold = 0.1) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -threshold * rect.height &&
    rect.bottom <= window.innerHeight + threshold * rect.height
  );
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId, behavior = "smooth") {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior, block: "start" });
  }
}

/**
 * Copy to clipboard
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
}

/**
 * Detect user language
 */
export function detectLanguage() {
  const lang = navigator.language || navigator.userLanguage || "en";
  return lang.split("-")[0];
}

/**
 * Check if device is touch-enabled
 */
export function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

/**
 * Check if online
 */
export function isOnline() {
  return navigator.onLine;
}

/**
 * Safe JSON parse
 */
export function safeJSONParse(str, fallback = null) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

/**
 * Get initials from name
 */
export function getInitials(name) {
  if (!name) return "W";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);
}

/**
 * Calculate reading time
 */
export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
