const skillsData = [
    { name: 'Figma', percentage: 90, img: 'assets/figma.png' },
    { name: 'HTML5', percentage: 100, img: 'assets/html.png' },
    { name: 'CSS', percentage: 90, img: 'assets/css.png' },
    { name: 'JavaScript', percentage: 50, img: 'assets/js.png' },
    { name: 'Tailwind CSS', percentage: 75, img: 'assets/tailwind.png' },
    { name: 'Bootstrap', percentage: 80, img: 'assets/bootstrap.jpg' },
    { name: 'Ionic', percentage: 75, img: 'assets/ionic.png' },
    { name: 'Java', percentage: 60, img: 'assets/java.jpg' },
    { name: 'C#', percentage: 50, img: 'assets/c.png' },
    { name: 'PHP', percentage: 90, img: 'assets/php.png' },
    { name: 'Canva', percentage: 90, img: 'assets/canva.png' },
    { name: 'Photopea', percentage: 50, img: 'assets/photopea.jpg' },
    { name: 'Capcut', percentage: 50, img: 'assets/capcut.png' }
];

function createSkillElement(skill) {
    return `
        <div class="circle" data-percentage="${skill.percentage}">
            <svg viewBox="0 0 36 36">
                <path class="bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path class="progress" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
            </svg>
            <div class="skill-logo">
                <img src="${skill.img}" alt="${skill.name}" class="rounded-full" />
            </div>
        </div>
    `;
}

function renderSkills() {
    const skillsContainer = document.getElementById('skills');
    skillsContainer.innerHTML = skillsData.map(createSkillElement).join('');
}

function animateSkills() {
    const circles = document.querySelectorAll('.circle');
    const triggerPoint = window.innerHeight * 0.8;

    circles.forEach(circle => {
        const rect = circle.getBoundingClientRect();
        if (rect.top < triggerPoint) {
            const percentage = circle.getAttribute('data-percentage');
            const path = circle.querySelector('.progress');
            path.style.strokeDashoffset = 100 - percentage;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    animateSkills();
});

window.addEventListener('scroll', animateSkills);