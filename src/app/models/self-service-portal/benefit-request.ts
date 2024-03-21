import { Benefit } from "./benefit.class";

export class BenefitRequest {
    private id: Number;
    private employeeId: Number;
    private motivation: String;
    private benefit: Benefit;

    constructor(id: Number, employeeId: Number, motivation: String, benefit: Benefit) {
        this.id = id;
        this.employeeId = employeeId;
        this.motivation = motivation;
        this.benefit = benefit;
    }

    getId(){
        return this.id;
    }

    getEmployeeId(){
        return this.employeeId;
    }

    getMotivation(){
        return this.motivation;
    }

    getBenefit(){
        return this.benefit;
    }
}
