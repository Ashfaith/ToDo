import TaskHandler from "./taskHandler.js"
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';

class ProjectView { 
    constructor(dataInstance) {
        this.dataInstance = dataInstance;
        this.content = document.querySelector('.content');
        this.main = document.querySelector('.main');
        //selects form from DOM
        this.form = document.createElement('form');
        //object containing form sections / names
        this.fields = [ 
            {placeHolder: "Project name",id: "project-name", type: "text", name: "Name"},
            {placeHolder: "Description",id: "description", type: "text", name: "Description"},
            {placeHolder: "Priority",id: "priority", type: "number", name: "Priority"},
            {placeHolder: "Due Date",id: "due-date", type: "text", name: "Due Date"},
        ];
        //object for storing user inputs from form
        this.formData = {};
    }

    buildForm() {
        //creates container for buttons
        const formActions = document.createElement('div');
        formActions.setAttribute('class', 'form-actions');
        //adds a class to the form for styling
        this.form.setAttribute('class', 'form');
        
        this.form.classList.add('show');
        //clears the formData object
        this.formData = {};
        //loop to build the this.form and attach names
        this.fields.forEach(field =>{ 

            const input = document.createElement('input');
            input.setAttribute('type', field.type);
            input.setAttribute('class', 'task-input');
            input.setAttribute('id', field.id);
            input.setAttribute('name', field.name);
            input.setAttribute('placeholder', field.placeHolder);

            if (input.id === 'priority' || input.id === 'due-date'){
                formActions.appendChild(input);
            } else {
                this.form.appendChild(input);
            };
        })
        
        //creates submit button on this.form
        const submitBtn = document.createElement('input');
        submitBtn.setAttribute('type', 'submit');
        submitBtn.setAttribute('value', 'Create project');
        submitBtn.setAttribute('class', 'button');
        submitBtn.setAttribute('id', 'create-project');
        formActions.appendChild(submitBtn);
        this.form.appendChild(formActions);

        //appends form to the main page
        this.content.appendChild(this.form);
         //prevents default action on the form

        new Pikaday({
            field: document.getElementById('due-date'),
            format: 'YYYY-MM-DD', 
            onSelect: function() {
                console.log(this.getMoment().format('YYYY-MM-DD'));
            }
        });
        
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.inputValues();
        })

        setTimeout(() => { //prevents closing form before form loads
            document.addEventListener('click', (e) => {
                if(!this.form.contains(e.target)){
                this.form.classList.remove('show');
                }
            });
        }, 0);
    }
 

    inputValues(){
            //creates and stores input values from form into an object
            for (const input of this.form) {
                if (input.name){
                    this.formData[input.name] = input.value;
                }
            }

            this.formData.tasks = [];

            // Pass the formData to your dataInstance array to be stored
            this.dataInstance.addToArr(this.formData)

            //reset the form
            this.form.reset();

            console.log(this.formData);

            //clear the form render
            this.form.innerHTML = '';
            this.form.classList.remove('show');
            //render the projects from the storage array
            this.showAllProjects();
    }


    showAllProjects() {
        this.main.innerHTML = '';
        this.dataInstance.projectsArr.forEach((project, index) => {
            this.projectDisplay(project, index);
        });
    }

    projectDisplay(projects, index) {
        // Create a new container for the project
        const projContainer = document.createElement('div');
        const buttonCont = document.createElement('div');
        const infoCont = document.createElement('div');

        projContainer.setAttribute('class', 'proj-container');
        projContainer.setAttribute('data-project-id', index);

        for(const key in projects) {
            const inputs = document.createElement('p');
            if (key === 'Priority'){
                inputs.innerText = `Priority ${projects[key]}`;
            } else if (key === 'Due Date') {
                inputs.innerText = `Due date ${projects[key]}`; 
            } else {
                inputs.innerText = `${projects[key]}`;
            };
            infoCont.appendChild(inputs);
        };
        projContainer.appendChild(infoCont);
        
        
        // Create and add the delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.setAttribute('class', 'delete-button');
        buttonCont.appendChild(deleteButton);
        
        // Create and add the add task button
        const addTaskButton = document.createElement('button');
        addTaskButton.innerText = 'Add Task';
        addTaskButton.setAttribute('class', 'add-task-btn');
        buttonCont.appendChild(addTaskButton);
        
        projContainer.appendChild(buttonCont)

        const taskContainer = document.createElement('div');
        taskContainer.setAttribute('class', 'task-container');
        taskContainer.setAttribute('data-task-id', index);
        projContainer.appendChild(taskContainer);

        // Append the project container to the main container
        this.main.appendChild(projContainer);

        deleteButton.addEventListener('click', () => {
            this.deleteClick(index);
        });

        addTaskButton.addEventListener('click', () => {
            this.addTaskClick(index, projContainer);
        });
    }

    deleteClick(index) {
        this.main.innerHTML = '';
        this.dataInstance.deleteFromArr(index);
        this.showAllProjects();
    }

    addTaskClick(index, projContainer) {
        const projectData = this.dataInstance.projectsArr[index];
        const taskHandler = new TaskHandler(projectData, projContainer);
        const taskForm = taskHandler.generateTaskForm();
        projContainer.appendChild(taskForm);

        // this.main.appendChild(projContainer);
    }

    sortBy() {
        
        document.getElementById("myDropdown").classList.toggle("show");

          
          // Close the dropdown menu if the user clicks outside of it
          window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
              const dropdowns = document.getElementsByClassName("dropdown-content");
              let i;
              for (i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }

        document.querySelector('#due-date').addEventListener('click', () => {
            this.main.innerHTML = '';
            this.dataInstance.sortByDate();
            this.showAllProjects()
        });
        
        document.querySelector('#name').addEventListener('click', () => {
            this.main.innerHTML = '';
            this.dataInstance.sortByName();
            this.showAllProjects()
        });

        document.querySelector('#priority').addEventListener('click', () => {
            this.main.innerHTML = '';
            this.dataInstance.sortByPriority();
            this.showAllProjects();
        })
    }
}

export default ProjectView