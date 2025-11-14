// Portfolio configuration
const projects = [
    { id: 'project-1', name: 'Project One', file: 'project-1.md' },
    { id: 'project-2', name: 'Project Two', file: 'project-2.md' },
    { id: 'sample', name: 'Sample Project', file: 'sample.md' }
];

let currentProject = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjectList();
});

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
            <div class="welcome">
                <p>Error loading project: ${error.message}</p>
            </div>
        `;
    }
}

// Keyboard navigation (optional enhancement)
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
