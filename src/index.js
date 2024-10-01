import project from "./project.js"

const content = document.querySelector(".content")

class NewProject {
    constructor() {
        //creates a form element to show in DOM
        this.form = document.createElement('form');
        //object containing form sections / names
        this.fields = [ 
            {label: "Project name:", id: "project-name", type: "text"},
            {label: "Description:", id: "description", type: "text"},
            {label: "Priority:", id: "priority", type: "number"},
            {label: "Notes:", id: "notes", type:"text"},
            {label: "Due date:", id: "due-date", type: "date"},
        ];

        this.projectObj = {};
    } 

    buildForm() {
        //loop to build the this.form and attach names
        this.fields.forEach(field =>{ 
            const label = document.createElement('label');
            label.setAttribute('for' , field.id);
            label.innerText = field.label;
            this.form.appendChild(label);

            const input = document.createElement('input');
            input.setAttribute('type', field.type);
            input.setAttribute('id', field.id);
            input.setAttribute('name', field.id);
            this.form.appendChild(input);
            console.log(input);
        })
        content.appendChild(this.form);
        this.submitBtn();
    }

    //creates submit button on this.form
    submitBtn() {
        const submitBtn = document.createElement('input');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('value', 'Create project');
        submitBtn.setAttribute('class', 'button');
        submitBtn.setAttribute('id', 'create-project');
        this.form.appendChild(submitBtn);
    }

    inputValues(){
        //prevents default action on the form
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            //creates and stores input values from form into an object
            const inputData = new FormData(this.form);
            const formObj = Object.fromEntries(inputData);
            console.log(formObj);

            this.projectDisplay(formObj)
        });
    }

    projectDisplay(formObj) {
        for(const key in formObj) {
            const inputs = document.createElement('p');
            inputs.innerText = `${key}: ${formObj[key]}`;
            content.appendChild(inputs);
        };
    }
}

//option to create a new project
const newProjectBtn = document.querySelector("#new-project-btn");
newProjectBtn.addEventListener('click', () => {
    const project = new NewProject;
    project.buildForm();
    //gathers values from form
    const createFormBtn = document.querySelector('#create-project');
    createFormBtn.addEventListener('click', () => {
    project.inputValues();
})
});

// const createFormBtn = document.querySelector('#create-project');
// createFormBtn.addEventListener('click', () => {
//     project.inputValues();
// })
 