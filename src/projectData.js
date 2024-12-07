class Data {
    constructor() {
        this.projectsArr = [];
    }

    addToArr(formData) {
        this.projectsArr.push(formData);
        console.log(this.projectsArr);
    }

    deleteFromArr(formData) {
        this.projectsArr.splice(formData, 1);
        console.log(this.projectsArr);
    }

    sortByDate(){
        this.projectsArr.sort((a,b) => a["Due Date"].localeCompare(b["Due Date"]));
        console.log(this.projectsArr);
    }

    sortByName() {
      this.projectsArr.sort((a,b) => {
        if (a.Name < b.Name) {
          return -1;
        }
        if (a.Name > b.Name) {
          return 1;
        }

        return 0;
      });
      console.log(this.projectsArr);
    }

    sortByPriority() {
      this.projectsArr.sort((a,b) => {return a.Priority-b.Priority});
    }
}

export default Data;