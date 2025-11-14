// Portfolio configuration
const projects = [
    { id: 'project-1', name: 'Project One', file: 'project-1.md', year: '2024' },
    { id: 'project-2', name: 'Project Two', file: 'project-2.md', year: '2024' },
    { id: 'sample', name: 'Sample Project', file: 'sample.md', year: '2024' }
];

// State
let currentProject = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    loadProjects();
    initScrollAnimations();
    initModal();
    initParallax();
});

// Custom Cursor
function initCursor() {
    const cursor = document.getElementById('cursor');
    const cursorDot = document.getElementById('cursor-dot');

    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    function animate() {
        const delay = 0.1;
        cursorX += (mouseX - cursorX) * delay;
        cursorY += (mouseY - cursorY) * delay;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animate);
    }
    animate();

    // Cursor interactions
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        });
    });
}

// Load Projects
function loadProjects() {
    const container = document.getElementById('projects-container');

    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card group';
        projectCard.style.transitionDelay = `${index * 0.1}s`;

        projectCard.innerHTML = `
            <div class="flex items-start gap-8 md:gap-16 border-b border-white/10 pb-12 hover:border-white/20 transition-colors duration-300">
                <span class="project-number text-gray-600 text-sm md:text-base font-light min-w-[3rem]">
                    ${String(index + 1).padStart(2, '0')}
                </span>
                <div class="flex-1">
                    <div class="flex items-center gap-4 mb-2">
                        <h3 class="text-2xl md:text-4xl font-light group-hover:text-white transition-colors duration-300">
                            ${project.name}
                        </h3>
                        <span class="project-arrow text-gray-600 text-xl">→</span>
                    </div>
                    <p class="text-gray-600 text-sm md:text-base">${project.year}</p>
                </div>
            </div>
        `;

        projectCard.addEventListener('click', () => openProject(project));
        container.appendChild(projectCard);
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe all fade-in sections
    document.querySelectorAll('.fade-in-section').forEach(el => {
        observer.observe(el);
    });

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(el => {
        observer.observe(el);
    });
}

// Parallax Effect
function initParallax() {
    let ticking = false;

    document.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;

                document.querySelectorAll('.parallax').forEach(el => {
                    el.style.transform = `translate(${x}px, ${y}px)`;
                });

                ticking = false;
            });

            ticking = true;
        }
    });
}

// Modal Functions
function initModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-modal');

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('pointer-events-auto')) {
            closeModal();
        }
    });
}

async function openProject(project) {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    try {
        // Show loading
        content.innerHTML = '<p class="loading text-gray-600">Loading...</p>';
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100', 'pointer-events-auto');
        document.body.classList.add('modal-open');

        // Fetch markdown
        const response = await fetch(`portfolio/${project.file}`);
        if (!response.ok) {
            throw new Error('Project not found');
        }

        const markdown = await response.text();

        // Render markdown with animation
        setTimeout(() => {
            content.innerHTML = marked.parse(markdown);
            content.classList.add('animate-fade-in');
        }, 100);

        currentProject = project;
    } catch (error) {
        console.error('Error loading project:', error);
        content.innerHTML = `
            <div class="text-center py-20">
                <p class="text-gray-600">Error loading project: ${error.message}</p>
            </div>
        `;
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modal-content');

    modal.classList.remove('opacity-100', 'pointer-events-auto');
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('modal-open');

    setTimeout(() => {
        content.innerHTML = '';
        content.classList.remove('animate-fade-in');
    }, 300);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!currentProject) return;

    const currentIndex = projects.findIndex(p => p.id === currentProject.id);

    if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        openProject(projects[currentIndex - 1]);
    } else if (e.key === 'ArrowRight' && currentIndex < projects.length - 1) {
        e.preventDefault();
        openProject(projects[currentIndex + 1]);
    }
});

// Page visibility change - pause animations when tab is hidden
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});
