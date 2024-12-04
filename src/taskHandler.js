class TaskHandler {
    constructor(projectData, projContainer) {
        this.projectData = projectData;
        this.projContainer = projContainer;
        this.taskContainer = projContainer.querySelector('.task-container')
        this.formLabels = [
            // {label: "Task Name:", id: "task-name", type: "text"},
            {label: "Task description", id: "task-desc", type: "text"},

        ];
    }

    generateTaskForm() {
        const taskFormCont = document.createElement('div');
        const taskForm = document.createElement('form');
        taskFormCont.setAttribute('class', 'task-form-cont');
    
        this.formLabels.forEach(field => { 
            const taskInput = document.createElement('input');
            taskInput.setAttribute('type', field.type);
            taskInput.setAttribute('id', field.id);
            taskInput.setAttribute('name', field.label);
            taskInput.setAttribute('placeholder', field.label);
            taskForm.appendChild(taskInput);
        });
    
        // Creates submit button on this.taskForm
        const submitTskBtn = document.createElement('input');
        submitTskBtn.setAttribute('type', 'submit');
        submitTskBtn.setAttribute('value', 'Create task');
        submitTskBtn.setAttribute('class', 'create-tsk-btn');
        taskForm.appendChild(submitTskBtn);
    
        taskFormCont.appendChild(taskForm);
    
        // Action for the create task button
        taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
    
            // Get the task description input directly from the form elements
            const taskDescriptionValue = taskForm.querySelector('#task-desc').value;
            console.log(taskDescriptionValue);
            this.addTask(taskDescriptionValue);
            this.renderAllTasks();
    
            // Reset the task form
            taskForm.reset();

            taskFormCont.remove();
        });
    
        return taskFormCont;
    }

    renderAllTasks() {
        this.taskContainer.innerHTML = '';
        this.projectData.tasks.forEach((task, index) => {
            this.renderTask(task, index);
        });
    }

    renderTask(task, index) {
        const taskDescCont = document.createElement('div');
        taskDescCont.setAttribute('class', 'task-desc-cont')

        for(const key in task) {
            const taskPropertyElement = document.createElement('p');
            taskPropertyElement.innerText = `${task[key]}`;
            taskDescCont.appendChild(taskPropertyElement);
        };
        this.taskContainer.appendChild(taskDescCont);
        
        const deleteTskBtn = document.createElement('button');
        const icon = document.createElement('i');
        icon.classList.add('material-symbols-outlined');
        icon.innerText = 'close';
        deleteTskBtn.appendChild(icon);
        deleteTskBtn.setAttribute('class', 'delete-tsk-btn');
        taskDescCont.appendChild(deleteTskBtn);

        this.projContainer.appendChild(this.taskContainer);


        deleteTskBtn.addEventListener('click', () => {
            this.deleteTask(index);
        });
    }

    // Add new task from form inputs
    addTask(taskDescriptionValue) {
        const task = {taskDescriptionValue};
        this.projectData.tasks.push(task)
        console.log(this.projectData);
    }

    deleteTask(task, index) {
        this.projectData.tasks.splice(task, 1)
        console.log(this.projectData);
        this.renderAllTasks();
    }

    // Get all tasks
    getTasks() {
        return this.projectData;
    }
}

export default TaskHandler;