// Portfolio configuration
const projects = [
    { id: 'project-1', name: 'Project One', file: 'project-1.md' },
    { id: 'project-2', name: 'Project Two', file: 'project-2.md' },
    { id: 'sample', name: 'Sample Project', file: 'sample.md' }
];

// Section content
const sections = {
    about: `
        <h1 class="text-4xl font-semibold mb-4 tracking-tight">hey, i'm efra</h1>
        <p class="text-lg text-gray-400 mb-8 leading-relaxed">
            currently doing product & ops at <a href="https://vista.wtf" target="_blank" class="text-white border-b border-white/30 hover:border-white">vista</a>.
            we help orgs make better decisions with data systems, blockchain analytics, and protocol research.
        </p>

        <div class="space-y-6">
            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">what i do</h3>
                <p class="text-gray-400 leading-relaxed mb-4">
                    i work at the intersection of product, design, and data. mostly blockchain analytics (SQL, Dune),
                    building dashboards (Next.js), brand work, and making complex protocol stuff understandable.
                </p>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">background</h3>
                <p class="text-gray-400 leading-relaxed">
                    before Vista, i was at <span class="text-white">Llama</span> (acquired by River Protocol) doing content & comms
                    for DAOs like Nouns, AAVE, and dYdX. also co-founded
                    <a href="https://ethereumdom.org" target="_blank" class="text-white border-b border-white/30 hover:border-white">Ethereum Dominicana</a>
                    to get web3 going in the DR.
                </p>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">misc</h3>
                <p class="text-gray-400">
                    based in santo domingo 🇩🇴 • bilingual (spanish/english) • into design systems, music production, and philosophy
                </p>
            </div>
        </div>
    `,

    experience: `
        <h1 class="text-4xl font-semibold mb-8 tracking-tight">experience</h1>

        <div class="space-y-10">
            <!-- Vista -->
            <div class="border-l-2 border-white/20 pl-6">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h2 class="text-xl font-semibold">Product & Ops</h2>
                        <p class="text-gray-400">Vista</p>
                    </div>
                    <span class="text-sm text-gray-500">May 2025 – Present</span>
                </div>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Led complete rebrand: designed brand identity, color system, and landing page</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Built Operator Dashboard, an open-source platform connecting blockchain operators with validation opportunities using Next.js</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Contributed to 10+ blockchain analytics projects for ApeChain and Obol: authored reports, refined data narratives, and created SQL queries</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Bridged client-technical communication ensuring clear project scopes and aligned expectations</span>
                    </li>
                </ul>
            </div>

            <!-- Llama -->
            <div class="border-l-2 border-white/20 pl-6">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h2 class="text-xl font-semibold">Content & Communications</h2>
                        <p class="text-gray-400">Llama (acquired by River Protocol)</p>
                    </div>
                    <span class="text-sm text-gray-500">May 2022 – Sept 2023</span>
                </div>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Led visual direction for financial reports and product announcements translating complex protocol economics into compelling narratives</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Established brand voice framework ensuring consistency across technical documentation and community-facing content</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Served tier-1 DAOs including Nouns, AAVE, and dYdX with treasury management and protocol analysis</span>
                    </li>
                </ul>
            </div>

            <!-- TEC -->
            <div class="border-l-2 border-white/20 pl-6">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h2 class="text-xl font-semibold">Community Growth & Visual Design</h2>
                        <p class="text-gray-400">Token Engineering Commons</p>
                    </div>
                    <span class="text-sm text-gray-500">Feb 2022 – Oct 2024</span>
                </div>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Scaled community engagement by 200% through data-informed social strategy</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2 mt-1">•</span>
                        <span>Designed internal audit report visualizations making token engineering concepts accessible to broader audiences</span>
                    </li>
                </ul>
            </div>

            <!-- Ethereum Dominicana -->
            <div class="border-l-2 border-white/20 pl-6">
                <div class="flex items-start justify-between mb-3">
                    <div>
                        <h2 class="text-xl font-semibold">Co-Founder</h2>
                        <p class="text-gray-400">Ethereum Dominicana</p>
                    </div>
                    <span class="text-sm text-gray-500">Sept 2022 – Present</span>
                </div>
                <p class="text-gray-400">
                    Organizing events with Nouns and Devcon, kickstarting Dominican Republic's Web3 community from the ground up.
                </p>
            </div>
        </div>
    `,

    skills: `
        <h1 class="text-4xl font-semibold mb-8 tracking-tight">skills</h1>

        <div class="space-y-8">
            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Product & Strategy</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Product Strategy</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Protocol Research</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Client Communication</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Community Management</span>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Data & Analytics</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">SQL / DuneSQL</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Dune Analytics</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Blockchain Explorers</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Google Sheets</span>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Development</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Next.js</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">React</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Tailwind CSS</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Git / GitHub</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">JavaScript</span>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Design & Creative</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Brand Development</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Figma</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Adobe CC</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Copywriting</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Photography</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Video Editing</span>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Tools & Platforms</h3>
                <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Notion</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Dune</span>
                    <span class="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300">Audio Engineering</span>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Education</h3>
                <div class="space-y-3">
                    <div>
                        <p class="text-white font-medium">Bachelor Degree, Marketing</p>
                        <p class="text-gray-400 text-sm">Universidad APEC (2020-2025) • 3.8/4.0 GPA</p>
                    </div>
                    <div>
                        <p class="text-gray-400 text-sm">Google Certification: Understanding Customer Needs and Online Behaviors</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Interests</h3>
                <p class="text-gray-400 leading-relaxed">
                    Thriller movies, videogames, vintage fashion, music production, design systems,
                    philosophy, reverse engineering, mindfulness & internet culture.
                </p>
            </div>
        </div>
    `,

    design: `
        <h1 class="text-4xl font-semibold mb-8 tracking-tight">design work</h1>

        <p class="text-gray-400 mb-6 leading-relaxed">
            a collection of brand identity, visual design, and creative work.
            everything from protocol rebrands to community visuals.
        </p>

        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2 mb-8" id="category-filters">
            <button class="category-filter active px-4 py-2 text-sm rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all" data-category="all">
                All Work
            </button>
            <button class="category-filter px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-all" data-category="brand-identity">
                Brand Identity
            </button>
            <button class="category-filter px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-all" data-category="posters">
                Posters
            </button>
            <button class="category-filter px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-all" data-category="artwork">
                Artwork
            </button>
            <button class="category-filter px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-all" data-category="ui-design">
                UI Design
            </button>
            <button class="category-filter px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-all" data-category="social-media">
                Social Media
            </button>
            <button class="category-filter px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/10 transition-all" data-category="misc">
                Misc
            </button>
        </div>

        <!-- Masonry Grid -->
        <div id="design-grid" class="columns-2 md:columns-3 gap-4 space-y-4">
            <!-- Images will be loaded here by JavaScript -->
        </div>

        <!-- Empty State -->
        <div id="empty-state" class="mt-12 p-8 border border-white/10 rounded-lg bg-white/5 text-center">
            <h3 class="text-lg font-medium mb-3">Add Your Design Work</h3>
            <p class="text-gray-400 text-sm mb-4">
                No images loaded yet. Follow these steps to migrate from imgur:
            </p>
            <ol class="space-y-2 text-gray-400 text-sm text-left max-w-2xl mx-auto">
                <li>1. Download images from <a href="https://imgur.com/a/cguulXy" target="_blank" class="text-white border-b border-white/30 hover:border-white">your imgur album</a></li>
                <li>2. Organize them into <code class="bg-white/10 px-2 py-1 rounded">design/</code> category folders</li>
                <li>3. Update <code class="bg-white/10 px-2 py-1 rounded">js/design-data.js</code> with image paths and metadata</li>
                <li>4. See <code class="bg-white/10 px-2 py-1 rounded">design/README.md</code> for detailed instructions</li>
            </ol>
        </div>

        <!-- Lightbox -->
        <div id="lightbox" class="fixed inset-0 bg-black/95 z-50 hidden items-center justify-center p-6" onclick="closeLightbox()">
            <button class="absolute top-6 right-6 text-white text-4xl hover:text-gray-400 transition-colors">&times;</button>
            <img id="lightbox-img" src="" alt="" class="max-w-full max-h-full object-contain rounded-lg">
        </div>
    `
};

let currentProject = null;
let currentSection = 'about';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjectList();
    loadSection('about');
    initNavigation();
});

// Load section content
function loadSection(sectionId) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = sections[sectionId] || '<p class="text-gray-500">Section not found</p>';
    currentSection = sectionId;
    currentProject = null;

    // Update active nav button
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });

    // Deactivate project buttons
    document.querySelectorAll('#projects button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Special handling for design section
    if (sectionId === 'design') {
        setTimeout(() => {
            initDesignWork();
        }, 100);
    }
}

// Initialize navigation
function initNavigation() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            loadSection(btn.dataset.section);
        });
    });
}

// Load project list
function loadProjectList() {
    const projectList = document.getElementById('projects');
    projectList.innerHTML = '';

    projects.forEach(project => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = project.name;
        button.dataset.projectId = project.id;
        button.classList.add('nav-btn');
        button.addEventListener('click', () => loadProject(project));
        li.appendChild(button);
        projectList.appendChild(li);
    });
}

// Load and render project
async function loadProject(project) {
    try {
        // Update active state
        document.querySelectorAll('#projects button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-project-id="${project.id}"]`).classList.add('active');

        // Deactivate section nav
        document.querySelectorAll('.nav-btn[data-section]').forEach(btn => {
            btn.classList.remove('active');
        });

        // Fetch markdown
        const response = await fetch(`portfolio/${project.file}`);
        if (!response.ok) {
            throw new Error('Project not found');
        }

        const markdown = await response.text();

        // Render markdown
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = marked.parse(markdown);

        currentProject = project;
        currentSection = null;
    } catch (error) {
        console.error('Error loading project:', error);
        document.getElementById('content').innerHTML = `
            <div class="text-gray-500 py-20 text-center">
                <p>Error loading project: ${error.message}</p>
            </div>
        `;
    }
}

// Design Work Functions
let currentCategory = 'all';

function initDesignWork() {
    // Check if designWork is defined
    if (typeof designWork === 'undefined' || !designWork || designWork.length === 0) {
        // Show empty state
        document.getElementById('empty-state').style.display = 'block';
        document.getElementById('design-grid').style.display = 'none';
        return;
    }

    // Hide empty state
    document.getElementById('empty-state').style.display = 'none';
    document.getElementById('design-grid').style.display = 'block';

    // Init category filters
    initCategoryFilters();

    // Render all work initially
    renderDesignWork('all');
}

function initCategoryFilters() {
    const filters = document.querySelectorAll('.category-filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Update active state
            filters.forEach(f => f.classList.remove('active', 'bg-white/10'));
            filter.classList.add('active', 'bg-white/10');

            // Filter work
            const category = filter.dataset.category;
            currentCategory = category;
            renderDesignWork(category);
        });
    });
}

function renderDesignWork(category) {
    const grid = document.getElementById('design-grid');
    if (!grid) return;

    // Filter by category
    const filtered = category === 'all'
        ? designWork
        : designWork.filter(work => work.category === category);

    // Clear grid
    grid.innerHTML = '';

    // Render each work
    filtered.forEach(work => {
        const img = document.createElement('img');
        img.src = work.image;
        img.alt = work.title || 'Design work';
        img.className = 'w-full h-auto rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer mb-4 break-inside-avoid';
        img.onclick = () => openLightbox(work);
        img.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23111%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22%23666%22 font-family=%22monospace%22%3EImage not found%3C/text%3E%3C/svg%3E';
        };

        grid.appendChild(img);
    });
}

function openLightbox(work) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');

    img.src = work.image;
    img.alt = work.title || 'Design work';

    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

// Close lightbox with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && !lightbox.classList.contains('hidden')) {
            closeLightbox();
        }
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Navigate between sections
    if (!currentProject && currentSection) {
        const sectionKeys = ['about', 'experience', 'skills', 'design'];
        const currentIndex = sectionKeys.indexOf(currentSection);

        if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            loadSection(sectionKeys[currentIndex - 1]);
        } else if (e.key === 'ArrowDown' && currentIndex < sectionKeys.length - 1) {
            e.preventDefault();
            loadSection(sectionKeys[currentIndex + 1]);
        }
    }

    // Navigate between projects
    if (currentProject) {
        const currentIndex = projects.findIndex(p => p.id === currentProject.id);

        if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            loadProject(projects[currentIndex - 1]);
        } else if (e.key === 'ArrowDown' && currentIndex < projects.length - 1) {
            e.preventDefault();
            loadProject(projects[currentIndex + 1]);
        }
    }
});
