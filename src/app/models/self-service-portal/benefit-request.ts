import { Employee } from "../user-management-portal/employee.model";
import { Benefit } from "./benefit.class";

export class BenefitRequest {
    id: Number;
    employee: Employee;
    motivation: String;
    benefitDto: Benefit;

    constructor(id: Number, employee: Employee, motivation: String, benefitDto: Benefit) {
        this.id = id;
        this.employee = employee;
        this.motivation = motivation;
        this.benefitDto = benefitDto;
    }

    getId() {
        return this.id;
    }

    getEmployeeId() {
        return this.employee;
    }

    getMotivation() {
        return this.motivation;
    }

    getBenefit() {
        return this.benefitDto;
    }
}



[
    {
        "id": 1,
        "employee": {
            "userId": null,
            "firstName": "",
            "lastName": "",
            "userName": "admin",
            "email": null,
            "password": null,
            "roles": [
                {
                    "id": "5c1dd980-6629-49fe-9d25-1e9b3057fdf9",
                    "name": "default-roles-esprit",
                    "permissions": null
                }
            ],
            "active": true
        },
        "motivation": null,
        "benefitDto": {
            "id": 2,
            "type": "MONEY",
            "name": "Augmentation",
            "backgroundImageUri": "https://media.istockphoto.com/id/1490133656/photo/young-woman-using-a-laptop-while-working-from-home.webp?s=1024x1024&w=is&k=20&c=mg4cZuZQfZcBi6KBU_JyNGSFzA2ZSCOexOjep4TazLc=",
            "description": "string"
        }
    }
]