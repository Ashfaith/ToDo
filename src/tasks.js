import NewProject from "./project.js"

class Tasks extends NewProject {
    constructor() {
        super();
    }

    addToObj() {
        const test = "test key";
        this.formObj[test] = "test value";
        console.log(this.formObj);
    }
}


export default Tasks;