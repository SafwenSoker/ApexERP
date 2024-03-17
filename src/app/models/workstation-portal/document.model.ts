export class Document {
    private id: String;
    private name: String;
    private description: String;
    private userId: String;
    private text: String;
    private projectId?: String;
    private sprintId?: String;

    constructor(id: String, name: String, description: String, userId: String, text: String, projectId?: String, sprintId?: String) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.userId = userId;
        this.text = text;
        this.projectId = projectId ? projectId : null;
        this.sprintId = sprintId ? sprintId : null;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getDescription() {
        return this.description;
    }

    public getUserId() {
        return this.userId;
    }

    public getText() {
        return this.text;
    }

    public getProjectId() {
        return this.projectId;
    }

    public getSprintId() {
        return this.sprintId;
    }

    public getDocumentsTreeRepresentation() {
        if (this.sprintId) {
            return {
                key: this.projectId + "-" + this.sprintId + "-" + this.id,
                label: this.name,
                icon: "pi pi-fw pi-file"
            }
        }
        return {
            key: this.projectId + "-" + this.id,
            label: this.name,
            icon: "pi pi-fw pi-file"
        }
    }
}
