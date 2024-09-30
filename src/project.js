
class Project {
    
    constructor(title, description, priority, notes, dueDate) {
        this.title = title;
        this.description = description
        this.priority = priority;
        this.notes = notes;
        this.dueDate = dueDate;
    } 

    displayProject() {
        this.addProject();
        console.log(`Title:${this.title}\nDescription:${this.description}\nPriority:${this.priority}\nNotes:${this.notes}\nDue Date:${this.dueDate}` 
        );
        const projectText = `Title:${this.title}\nDescription:${this.description}\nPriority:${this.priority}\nNotes:${this.notes}\nDue Date:${this.dueDate}`;
        return projectText;
    }
}

const project = new Project;

export default project
