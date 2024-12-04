import ProjectView from "./projectView.js";
import Data from "./projectData.js";
import './styles.css'


//option to create a new project

const dataInstance = new Data();
let projectHandler;

document.querySelector("#new-project-btn").addEventListener('click', () => {
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

