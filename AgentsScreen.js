// ============================================
// WAYVO APP CONSTANTS
// ============================================

// Design System Colors
export const COLORS = {
  navy: "#0D1B2A",
  mid: "#1B3A4B",
  green: "#00C896",
  greenDark: "#009E78",
  gold: "#F5A623",
  red: "#E53935",
  purple: "#7C3AED",
  blue: "#1D4ED8",
  teal: "#0D9488",
  pink: "#DB2777",
  coral: "#EA580C",
  grad: "linear-gradient(145deg,#0D1B2A,#1B3A4B 60%,#0D2E1F 100%)",
};

// API Configuration
export const API_CONFIG = {
  ANTHROPIC_BASE_URL: "https://api.anthropic.com/v1/messages",
  MODEL: "claude-sonnet-4-6", // Updated to current recommended model
  MAX_TOKENS: 1000,
  ANTHROPIC_VERSION: "2023-06-01",
};

// Storage Keys
export const STORAGE_KEYS = {
  WISHLIST: "wv3_wl",
  USER: "wv3_user",
  ONBOARDING_COMPLETE: "wv3_onboarded",
  THEME: "wv3_theme",
};

// App Phases
export const APP_PHASES = {
  SPLASH: "splash",
  ONBOARDING: "onboard",
  APP: "app",
};

// App Modes
export const APP_MODES = {
  TOURIST: "tourist",
  PARTNER: "partner",
};

// Main Tabs
export const MAIN_TABS = [
  { id: "home", icon: "🏠", label: "Home" },
  { id: "search", icon: "🔍", label: "Search" },
  { id: "plan", icon: "🗺️", label: "Plan" },
  { id: "support", icon: "💬", label: "Support" },
  { id: "profile", icon: "👤", label: "Profile" },
];

// Categories
export const CATEGORIES = [
  { id: "all", label: "All", icon: "✨" },
  { id: "hotels", label: "Hotels", icon: "🏨" },
  { id: "tours", label: "Tours", icon: "🗺️" },
  { id: "food", label: "Food", icon: "🍜" },
  { id: "transport", label: "Transport", icon: "🚌" },
  { id: "wellness", label: "Wellness", icon: "🧖" },
];

// Cities
export const CITIES = [
  "Marrakech", "Casablanca", "Fès", "Rabat", "Tanger",
  "Agadir", "Chefchaouen", "Essaouira", "Meknès",
  "Ouarzazate", "Merzouga", "Dakhla",
];

// Budget Ranges
export const BUDGETS = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500+",
  "Flexible",
];

// Nationalities
export const NATIONALITIES = [
  "French", "British", "American", "Spanish", "German",
  "Italian", "Dutch", "Belgian", "Canadian", "Swiss",
  "Moroccan", "Other",
];

// Interests
export const INTERESTS = [
  { id: "adventure", icon: "⛺", label: "Adventure" },
  { id: "luxury", icon: "💎", label: "Luxury" },
  { id: "culture", icon: "🕌", label: "Culture" },
  { id: "food", icon: "🍜", label: "Food" },
  { id: "family", icon: "👨‍👩‍👧", label: "Family" },
  { id: "romance", icon: "💝", label: "Romance" },
  { id: "budget", icon: "💰", label: "Budget" },
  { id: "wellness", icon: "🧖", label: "Wellness" },
  { id: "nature", icon: "🌿", label: "Nature" },
  { id: "photo", icon: "📸", label: "Photography" },
];

// Sort Options
export const SORT_OPTIONS = [
  "Recommended",
  "Highest rated",
  "Most popular",
  "Price: low to high",
  "Price: high to low",
];

// Trending Searches
export const TRENDING_SEARCHES = [
  "Sahara 3 days",
  "Riad Marrakech",
  "Airport transfer",
  "Food tour",
  "Hammam",
  "Atlas trek",
  "Cooking class",
  "Chefchaouen blue",
];

// Emergency Numbers
export const EMERGENCY_NUMBERS = [
  { icon: "🚔", name: "Police", number: "190", description: "Emergency" },
  { icon: "🚑", name: "Ambulance", number: "150", description: "Medical" },
  { icon: "👮", name: "Tourist Police", number: "177", description: "For tourists only" },
  { icon: "🔥", name: "Fire Brigade", number: "15", description: "Fire & rescue" },
  { icon: "🏥", name: "SOS Médecins", number: "0520 48 48 48", description: "24/7 doctor home visits" },
];

// Partner Types
export const PARTNER_TYPES = [
  { id: "hotel", icon: "🏨", label: "Hotel / Riad", col: COLORS.blue },
  { id: "tour", icon: "🗺️", label: "Tour Operator", col: COLORS.green },
  { id: "guide", icon: "🧭", label: "Local Guide", col: COLORS.gold },
  { id: "transport", icon: "🚌", label: "Transport", col: COLORS.teal },
  { id: "airbnb", icon: "🏠", label: "Vacation Rental", col: COLORS.purple },
  { id: "activity", icon: "🏄", label: "Activity & Sport", col: COLORS.pink },
];

// Points Configuration
export const POINTS = {
  WISHLIST_ADD: 5,
  WISHLIST_REMOVE: -5,
  ITINERARY_GENERATE: 10,
  BOOKING_COMPLETE: 0.1, // 10% of booking value
  SIGNUP_BONUS: 50,
};

// Animation Durations (ms)
export const ANIMATION = {
  SPLASH_LOGO_DELAY: 400,
  SPLASH_TEXT_DELAY: 1200,
  SPLASH_TRANSITION_DELAY: 2800,
  TOAST_DURATION: 2200,
  TYPING_SPEED: 900,
};

// Responsive Breakpoints
export const BREAKPOINTS = {
  mobile: 430,
  tablet: 768,
  desktop: 1024,
};
