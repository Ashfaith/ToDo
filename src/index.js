import ProjectView from "./projectView.js";
import Data from "./projectData.js";
import './styles.css'

const dataInstance = new Data();
let projectHandler;

const storageLoad = () => {
    if (localStorage.getItem('projectsArr') === 'undefined') {
        console.log('no projects stored');
        return;
    } else {
        loadProjects();
    }
} 

function loadProjects() {
    const storedProjects = localStorage.getItem('projectsArr');

    const parsedProjects = JSON.parse(storedProjects);

    dataInstance.projectsArr = parsedProjects;

    projectHandler = new ProjectView(dataInstance);
    
    projectHandler.showAllProjects();
}

window.onload = storageLoad();



//option to create a new project

document.querySelector('#new-project-btn').addEventListener('click', () => {
    projectHandler = new ProjectView(dataInstance);
    projectHandler.buildForm();
});

document.querySelector('#sort-by').addEventListener('click', () => {
    if (projectHandler) { 
        projectHandler.sortBy();
    } else {
        console.error('projectHandler not initialized');
    }
});

const menuItemAlert = document.querySelectorAll('.menu-item:not(#new-project-btn)')

menuItemAlert.forEach(item => {
    item.addEventListener('click', () => {
        alert('Does nothing yet!');
    });
});
