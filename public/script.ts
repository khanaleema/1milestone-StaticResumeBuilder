// Function to display content based on button click
function showContent(content: string) {
    const contentSection = document.getElementById('content');
    if (contentSection) {
        contentSection.innerHTML = content;
    }
}

// Handling button click actions
document.getElementById('educationBtn')?.addEventListener('click', () => {
    showContent(`
        <h3>Education</h3>
        <p><b>Cloud Applied Generative AI Engineer</b> <br>
          Governor Initiative For Artificial Intelligence and Computing <br>
           (2024))
        </p>
        <p><b>Intermediate </b> -  (2023-2024)</p>
    `);
});

document.getElementById('skillsBtn')?.addEventListener('click', () => {
    showContent(`
        <h3>Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
        </ul>
    `);
});

document.getElementById('experienceBtn')?.addEventListener('click', () => {
    showContent(`
        <h3>Experience</h3>
        <p><b>Front-End Developer </b><br> 
        responsive web applications - (2024)</p>
        <p><b>Full-stack Developer </b><br> 
           (2024-Present)
        </p>
    `);
});