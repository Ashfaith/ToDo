import ProjectView from "./projectView.js";
import Data from "./projectData.js";
import './styles.css'


//option to create a new project

const dataInstance = new Data();

document.querySelector("#new-project-btn").addEventListener('click', () => {
    const projectHandler = new ProjectView(dataInstance);
    projectHandler.buildForm();

    document.querySelector('#sort-by').addEventListener('click', () => {
        projectHandler.sortBy();
    });
});

