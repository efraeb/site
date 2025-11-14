// Portfolio configuration
const projects = [
    { id: 'project-1', name: 'Project One', file: 'project-1.md' },
    { id: 'project-2', name: 'Project Two', file: 'project-2.md' },
    { id: 'sample', name: 'Sample Project', file: 'sample.md' }
];

let currentProject = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    loadProjectList();
});

// Custom Cursor
function initCursor() {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        const delay = 0.15;
        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animate);
    }
    animate();

    // Cursor hover effects
    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
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
    } catch (error) {
        console.error('Error loading project:', error);
        document.getElementById('content').innerHTML = `
            <div class="text-gray-600 py-20 text-center">
                <p>Error loading project: ${error.message}</p>
            </div>
        `;
    }
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!currentProject) return;

    const currentIndex = projects.findIndex(p => p.id === currentProject.id);

    if (e.key === 'ArrowUp' && currentIndex > 0) {
        e.preventDefault();
        loadProject(projects[currentIndex - 1]);
    } else if (e.key === 'ArrowDown' && currentIndex < projects.length - 1) {
        e.preventDefault();
        loadProject(projects[currentIndex + 1]);
    }
});
