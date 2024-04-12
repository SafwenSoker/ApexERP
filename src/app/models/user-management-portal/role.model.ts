import { Employee } from "./employee.model";

export class Role {
    id?: string;
    name?: string;
    description?: string;
    composite?: boolean;
    clientRole?: boolean;
    containerId?: string;
    users?: Employee[];
    composites?: Role[];
    fromGroup?: string;
    constructor(name?: string, id?: string, description?: string, composite?: string, clientRole?: string, containerId?: string, users: Employee[] = [], composites: Role[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.composite = composite === 'true' ? true : false;
        this.clientRole = clientRole === 'true' ? true : false;
        this.containerId = containerId
        this.users = users;
        this.composites = composites;
    }
}
