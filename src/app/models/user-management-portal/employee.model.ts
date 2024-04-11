import { Role } from "./role.model";

export class Employee {
    access?: Access;
    createdTimestamp?: number;
    emailVerified?: boolean;
    active?: boolean;
    userName?: string;
    id?: string = '';
    notBefore?: number;
    password?: string;
    totp?: boolean;
    requiredActions?: string[];
    disableableCredentialTypes?: string[];
    firstName?: string;
    lastName?: string;
    email?: string;
    roles?: Role[];
    constructor(userName?: string, id?: string, access?: Access, createdTimestamp?: number, emailVerfied?: boolean, active?: boolean, notBefore?: number, totp?: boolean, requiredActions?: string[], disableableCredentialTypes?: string[], firstName?: string, lastName?: string, email?: string, roles: Role[] = []) {
        this.access = access;
        this.createdTimestamp = createdTimestamp;
        this.emailVerified = emailVerfied;
        this.active = active;
        this.userName = userName;
        this.id = id;
        this.notBefore = notBefore;
        this.totp = totp;
        this.requiredActions = requiredActions;
        this.disableableCredentialTypes = disableableCredentialTypes;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.roles = roles;
    }
}

export class Access {
    impersonate?: boolean;
    manage?: boolean;
    view?: boolean;
    manageGroupMembership?: boolean;
    mapRoles?: boolean;
    constructor(){}
}
