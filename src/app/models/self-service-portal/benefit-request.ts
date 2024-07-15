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

