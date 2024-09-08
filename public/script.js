"use strict";
var _a, _b, _c;
// Function to display content based on button click
function showContent(content) {
    const contentSection = document.getElementById('content');
    if (contentSection) {
        contentSection.innerHTML = content;
    }
}
// Handling button click actions
(_a = document.getElementById('educationBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    showContent(`
        <h3>Education</h3>
        <p><b>Cloud Applied Generative AI Engineer</b> <br>
          Governor Initiative For Artificial Intelligence and Computing <br>
           (2024))
        </p>
        <p><b>Intermediate </b> -  (2023-2024)</p>
    `);
});
(_b = document.getElementById('skillsBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
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
(_c = document.getElementById('experienceBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    showContent(`
        <h3>Experience</h3>
        <p><b>Front-End Developer </b><br> 
        responsive web applications - (2024)</p>
        <p><b>Full-stack Developer </b><br> 
           (2024-Present)
        </p>
    `);
});
