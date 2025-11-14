// Design work data
// Add your images here - only image path and category are required

const designWork = [
    // Example: { category: "posters", image: "design/posters/image-name.jpg" },
    // Add your images below:

];

// Categories for filtering
const categories = {
    all: "All Work",
    "brand-identity": "Brand Identity",
    posters: "Posters",
    artwork: "Artwork",
    "ui-design": "UI Design",
    "social-media": "Social Media",
    misc: "Miscellaneous"
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { designWork, categories };
}
