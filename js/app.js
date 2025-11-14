// Portfolio configuration
const projects = [
    { id: 'project-1', name: 'Project One', file: 'project-1.md' },
    { id: 'project-2', name: 'Project Two', file: 'project-2.md' },
    { id: 'sample', name: 'Sample Project', file: 'sample.md' }
];

// Section content
const sections = {
    about: `
        <h1 class="text-4xl font-semibold mb-4 tracking-tight">Hi, I'm Efraim</h1>
        <p class="text-lg text-gray-400 mb-8 leading-relaxed">
            Product & Ops at <a href="https://vista.wtf" target="_blank" class="text-white border-b border-white/30 hover:border-white">Vista</a>,
            a data & engineering group helping organizations make better decisions with blockchain analytics and protocol research.
        </p>

        <div class="space-y-6">
            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">What I Do</h3>
                <p class="text-gray-400 leading-relaxed mb-4">
                    I bridge creative vision and execution across design, analytics, and product. My work spans from
                    blockchain analytics and SQL queries to brand identity and dashboard development.
                </p>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-start">
                        <span class="text-white mr-2">→</span>
                        <span>Product strategy & protocol research</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2">→</span>
                        <span>Blockchain analytics with SQL/DuneSQL</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2">→</span>
                        <span>Full-stack development (Next.js, React)</span>
                    </li>
                    <li class="flex items-start">
                        <span class="text-white mr-2">→</span>
                        <span>Brand development & visual design</span>
                    </li>
                </ul>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Background</h3>
                <p class="text-gray-400 leading-relaxed">
                    Previously Content & Communications at <span class="text-white">Llama</span> (acquired by River Protocol),
                    serving tier-1 DAOs like Nouns, AAVE, and dYdX. Co-founder of
                    <a href="https://ethereumdom.org" target="_blank" class="text-white border-b border-white/30 hover:border-white">Ethereum Dominicana</a>,
                    kickstarting the Dominican Republic's Web3 community.
                </p>
            </div>

            <div>
                <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Location & Languages</h3>
                <p class="text-gray-400">
                    Based in Santo Domingo, Dominican Republic. Bilingual (Spanish/English).
                </p>
            </div>
        </div>
    `,

    experience: `
        <h1 class="text-4xl font-semibold mb-8 tracking-tight">Experience</h1>

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
        <h1 class="text-4xl font-semibold mb-8 tracking-tight">Skills</h1>

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

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Navigate between sections
    if (!currentProject && currentSection) {
        const sectionKeys = ['about', 'experience', 'skills'];
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
