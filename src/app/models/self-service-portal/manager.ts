
export class Manager {
    
    userId: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
  
    constructor(userId: string, firstName: string, lastName: string, userName: string, email: string, password: string) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    getUserId(){
        return this.userId;
    }
    getFirstName(){
        return this.firstName;
    }
    getLastName(){
        return this.lastName;
    }
    getUserName(){
        return this.userName;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
}
