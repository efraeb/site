// Design work data
// Add your images here with metadata

const designWork = [
    // Example entries - replace with your actual work
    {
        id: 1,
        title: "Vista Rebrand",
        category: "brand-identity",
        image: "design/brand-identity/vista-rebrand.jpg",
        year: "2024",
        description: "Complete rebrand including logo, color system, and landing page"
    },
    {
        id: 2,
        title: "Ethereum Dominicana Poster",
        category: "posters",
        image: "design/posters/eth-dom-event.jpg",
        year: "2024",
        description: "Event poster for Ethereum Dominicana meetup"
    },
    {
        id: 3,
        title: "Operator Dashboard",
        category: "ui-design",
        image: "design/ui-design/operator-dashboard.png",
        year: "2024",
        description: "Dashboard interface for blockchain operators"
    },
    // Add more as you migrate from imgur
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
