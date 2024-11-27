class TaskHandler {
    constructor(projectData, projContainer) {
        this.projectData = projectData;
        this.projContainer = projContainer;
        this.taskContainer = document.querySelector('.task-container')
        this.task = {};
        this.formLabels = [
            // {label: "Task Name:", id: "task-name", type: "text"},
            {label: "Description:", id: "task-desc", type: "text"},

        ];
        this.taskForm = document.createElement('form');
    }

    generateTaskForm() {
        this.formLabels.forEach(field =>{ 
            const label = document.createElement('label');
            label.setAttribute('for' , field.id);
            label.innerText = field.label;
            this.taskForm.appendChild(label);

            const input = document.createElement('input');
            input.setAttribute('type', field.type);
            input.setAttribute('id', field.id);
            input.setAttribute('name', field.label);
            this.taskForm.appendChild(input);
        })
        
        //creates submit button on this.takForm
        const submitTskBtn = document.createElement('input');
        submitTskBtn.setAttribute('type', 'submit');
        submitTskBtn.setAttribute('value', 'Create task');
        submitTskBtn.setAttribute('class', 'create-tsk-btn');
        this.taskForm.appendChild(submitTskBtn);

        //action for the create task button
        this.taskForm.addEventListener('submit', (e) => {
            // const title = document.querySelector('#task-name').value;
            const body = document.querySelector('#task-desc').value;
            e.preventDefault();
            this.addTask(body);

            this.renderAllTasks();
            //reset task form
            this.taskForm.reset();
            //clear the form render
            this.taskForm.innerHTML = '';
        })

        return this.taskForm
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
            const inputs = document.createElement('p');
            inputs.innerText = `${task[key]}`;
            taskDescCont.appendChild(inputs);
        };
        this.taskContainer.appendChild(taskDescCont);
        
        const deleteTskBtn = document.createElement('button');
        deleteTskBtn.innerText = 'X';
        deleteTskBtn.setAttribute('class', 'delete-tsk-btn');
        this.taskContainer.appendChild(deleteTskBtn);

        this.projContainer.appendChild(this.taskContainer);


        deleteTskBtn.addEventListener('click', () => {
            this.deleteTask(index);
        });
    }

    // Add new task from form inputs
    addTask(body) {
        const task = {body};
        this.projectData.tasks.push(task)
        console.log(this.projectData);
    }

    deleteTask(task) {
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