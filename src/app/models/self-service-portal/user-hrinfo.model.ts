import { Manager } from "./manager";

export class UserHRInfo {
    
    cin: String;
    numberOfHoursOff: Number;
    startDate: Date;
    endDate: Date;
    note: Number;
    manager: Manager;
    userId: String;
    netSalary: Number;
    baseSalary: Number;
    cnssNumber: Number;

    constructor(cin: String, numberOfHoursOff: Number, startDate: Date, endDate: Date, note: Number, manager: Manager, userId: String, netSalary: Number, baseSalary: Number, cnssNumber: Number) {
        this.cin = cin;
        this.numberOfHoursOff = numberOfHoursOff;
        this.startDate = startDate;
        this.endDate = endDate;
        this.note = note;
        this.manager = manager;
        this.userId = userId;
        this.netSalary = netSalary;
        this.baseSalary = baseSalary;
        this.cnssNumber = cnssNumber;
    }

    getCin(){
        return this.cin;
    }
    getNumberOfHoursOff(){
        return this.numberOfHoursOff;
    }
    getContractStartDate(){
        return this.startDate;
    }
    getEndDate(){
        return this.endDate;
    }
    getNote(){
        return this.note;
    }
    getManager(){
        return this.manager;
    }
    getUserId(){
        return this.userId;
    }
    getNetSalary(){
        return this.netSalary;
    }
    getBaseSalary(){
        return this.baseSalary;
    }
    getCnssNumber(){
        return this.cnssNumber;
    }
}
