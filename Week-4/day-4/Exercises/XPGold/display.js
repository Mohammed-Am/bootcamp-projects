const firstName = localStorage.getItem('first-name');
const lastNAME = localStorage.getItem('last-name');



let section = document.createElement('section')

section.textContent = `${firstName}  ${lastNAME}`;

document.body.appendChild(section)