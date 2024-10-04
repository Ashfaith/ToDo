import NewProject from "./project.js";
import Tasks from "./tasks.js"

const content = document.querySelector(".content")

//option to create a new project
const newProjectBtn = document.querySelector("#new-project-btn");
newProjectBtn.addEventListener('click', () => {
    const project = new NewProject();
    project.buildForm();
    //gathers values from form
    const createFormBtn = document.querySelector('#create-project');
    createFormBtn.addEventListener('click', () => {
        project.inputValues();
    });
});

content.addEventListener('click', (e) => {
    if(e.target.querySelector('#add-task-btn')){
        console.log("test");
        const task = new Tasks();
        task.addToObj();
    }
});




