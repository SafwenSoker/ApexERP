export class UserHRInfo {
    
    private cin: String;
    private numberOfHoursOff: Number;
    private startDate: Date;
    private endDate: Date;
    private note: Number;
    private managerId: String;
    private userId: String;
    private netSalary: Number;
    private baseSalary: Number;
    private cnssNumber: Number;
    private transportPrime: Number;

    constructor(cin: String, numberOfHoursOff: Number, startDate: Date, endDate: Date, note: Number, managerId: String, userId: String, netSalary: Number, baseSalary: Number, cnssNumber: Number, transportPrime: Number) {
        this.cin = cin;
        this.numberOfHoursOff = numberOfHoursOff;
        this.startDate = startDate;
        this.endDate = endDate;
        this.note = note;
        this.managerId = managerId;
        this.userId = userId;
        this.netSalary = netSalary;
        this.baseSalary = baseSalary;
        this.cnssNumber = cnssNumber;
        this.transportPrime = transportPrime;
    }
}
