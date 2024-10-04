

class NewProject {
    constructor() {
        this.content = document.querySelector(".content")
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

        this.formObj = {};
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
            input.setAttribute('name', field.label);
            this.form.appendChild(input);
            console.log(input);
        })
        this.content.appendChild(this.form);
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

    addTaskBtn() {
        const addTaskButton = document.createElement('button');
        addTaskButton.innerText = 'Add Task';
        addTaskButton.setAttribute('class', 'button');
        addTaskButton.setAttribute('id', 'add-task-btn');
        this.content.appendChild(addTaskButton);
    }

    projectDisplay(formObj) {
        for(const key in formObj) {
            const inputs = document.createElement('p');
            inputs.innerText = `${key} ${formObj[key]}`;
            this.content.appendChild(inputs);
        };
    }

    inputValues(){
        //prevents default action on the form
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            //creates and stores input values from form into an object
            const inputData = new FormData(this.form);
            this.formObj = Object.fromEntries(inputData);
            console.log(this.formObj);

            this.projectDisplay(this.formObj)
            this.addTaskBtn();
        });
    }
}

export default NewProject;
