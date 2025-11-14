// Design work data - Template
// Copy this structure for each image in your design/ folders

const designWork = [
    // === BRAND IDENTITY ===
    {
        id: 1,
        title: "Vista Rebrand",
        category: "brand-identity",
        image: "design/brand-identity/vista-rebrand.jpg",
        year: "2024",
        description: "Complete rebrand including logo, color system, and landing page"
    },

    // === POSTERS ===
    {
        id: 2,
        title: "Ethereum Dominicana Event",
        category: "posters",
        image: "design/posters/eth-dom-2024.jpg",
        year: "2024",
        description: "Event poster for community meetup"
    },

    // === ARTWORK ===
    {
        id: 3,
        title: "Digital Illustration",
        category: "artwork",
        image: "design/artwork/illustration-01.png",
        year: "2023",
        description: "Original digital artwork"
    },

    // === UI DESIGN ===
    {
        id: 4,
        title: "Operator Dashboard",
        category: "ui-design",
        image: "design/ui-design/operator-dashboard.png",
        year: "2024",
        description: "Dashboard interface for blockchain operators"
    },

    // === SOCIAL MEDIA ===
    {
        id: 5,
        title: "Instagram Post",
        category: "social-media",
        image: "design/social-media/post-01.jpg",
        year: "2024",
        description: "Social media content design"
    },

    // === MISC ===
    {
        id: 6,
        title: "Creative Project",
        category: "misc",
        image: "design/misc/project-name.jpg",
        year: "2023",
        description: "Description of the project"
    }

    // Add more entries for each image...
];

// Categories - don't change these
const categories = {
    all: "All Work",
    "brand-identity": "Brand Identity",
    posters: "Posters",
    artwork: "Artwork",
    "ui-design": "UI Design",
    "social-media": "Social Media",
    misc: "Miscellaneous"
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { designWork, categories };
}
