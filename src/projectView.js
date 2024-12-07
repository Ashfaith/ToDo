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
        
        this.form.classList.add('showForm');
        //clears the formData object
        this.formData = {};
        //loop to build the this.form and attach names
        this.fields.forEach(field =>{ 

            const input = document.createElement('input');
            input.setAttribute('type', field.type);
            input.setAttribute('class', 'form-input');
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

        const closeFormListener = (e) => {
            if (!this.form.contains(e.target)) {
                this.form.classList.remove('showForm');
                this.content.removeChild(this.form);
                // Remove the event listener after closing the form
                document.removeEventListener('click', closeFormListener);
            }
        };
    
        // Attach event listener only once
        setTimeout(() => {
            document.addEventListener('click', closeFormListener);
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

            this.dataInstance.addToArr(this.formData)

            this.updateLocalStorage();

            //reset the form
            this.form.reset();

            console.log(this.formData);

            //clear the form render
            this.form.innerHTML = '';
            this.form.classList.remove('showForm');
            //render the projects from the storage array
            this.showAllProjects();
    }

    updateLocalStorage() {
        localStorage.setItem('projectsArr', JSON.stringify(this.dataInstance.projectsArr));
        // console.log(localStorage.getItem('projectsArr'));
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
        const topSection = document.createElement('div');
        const buttonCont = document.createElement('div');
        const infoCont = document.createElement('div');
    
        projContainer.setAttribute('class', 'proj-container');
        projContainer.setAttribute('data-project-id', index);
        buttonCont.setAttribute('class', 'button-container');
        topSection.setAttribute('class', 'top-section');
    
        for(const key in projects) {
            const inputs = document.createElement('p');
            if (key === 'Priority'){
                inputs.innerText = `Priority ${projects[key]}`;
            } else if (key === 'Due Date') {
                inputs.innerText = `Due date ${projects[key]}`; 
            } else if (key === 'tasks') {
                //do nothing
            } else {
                inputs.innerText = `${projects[key]}`;
            };
            infoCont.appendChild(inputs);
        };
        topSection.appendChild(infoCont);
        
        // Create and add the delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete project';
        deleteButton.setAttribute('class', 'delete-button');
        buttonCont.appendChild(deleteButton);
        
        // Create and add the add task button
        const addTaskButton = document.createElement('button');
        addTaskButton.innerText = 'Add Task';
        addTaskButton.setAttribute('class', 'add-task-btn');
        buttonCont.appendChild(addTaskButton);
        
        topSection.appendChild(buttonCont);
        projContainer.appendChild(topSection);
    
        const taskContainer = document.createElement('div');
        taskContainer.setAttribute('class', 'task-container');
        taskContainer.setAttribute('data-task-id', index);
        projContainer.appendChild(taskContainer);
    
        // Append the project container to the main container
        this.main.appendChild(projContainer);
    
        // Initialize projectData first
        const projectData = this.dataInstance.projectsArr[index];  
        const taskHandler = new TaskHandler(projectData, projContainer);
    
    
        deleteButton.addEventListener('click', () => {
            this.deleteClick(index);
        });
    
        addTaskButton.addEventListener('click', () => {
            this.addTaskClick(index, taskHandler, projContainer);
        });
    
        return taskHandler;
    }


    deleteClick(index) {
        this.main.innerHTML = '';
        this.dataInstance.deleteFromArr(index);
        this.updateLocalStorage();
        this.showAllProjects();
    }

    addTaskClick(index, taskHandler, projContainer) {
        // Find and remove the previous task form
        const existingTaskForm = projContainer.querySelector('.task-form-cont');
        if (existingTaskForm) {
            projContainer.removeChild(existingTaskForm);
        }
        
        // Generate the task form using the taskHandler
        const taskForm = taskHandler.generateTaskForm(index);
        
        // Append the new task form to the project container
        projContainer.appendChild(taskForm);
    }

    sortBy() {
        
        const dropdownContent = document.querySelector(".dropdown-content");
        console.log('working');
        dropdownContent.classList.toggle("show-drop");

        // Close the dropdown if the user clicks outside
        window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show-drop')) {
                        openDropdown.classList.remove('show-drop');
                    }
                }
            }
        }

        document.querySelector('#due-date-sort').addEventListener('click', () => {
            this.main.innerHTML = '';
            this.dataInstance.sortByDate();
            this.showAllProjects()
        });
        
        document.querySelector('#name-sort').addEventListener('click', () => {
            this.main.innerHTML = '';
            this.dataInstance.sortByName();
            this.showAllProjects()
        });

        document.querySelector('#priority-sort').addEventListener('click', () => {
            this.main.innerHTML = '';
            this.dataInstance.sortByPriority();
            this.showAllProjects();
        })
    }
}

export default ProjectView