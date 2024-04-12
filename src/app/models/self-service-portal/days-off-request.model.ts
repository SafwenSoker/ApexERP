import { DaysOffStatus } from "./days-off-status.model";
import { DaysOffType } from "./days-off-type.model";

export class DaysOffRequest {
    startDate: Date;
    endDate: Date;
    daysoffType: DaysOffType;
    status: DaysOffStatus;
    reason: String;
    employeeId: String;

    constructor(startDate: Date, endDate: Date, daysoffType: DaysOffType, status: DaysOffStatus, reason: String, employeeId: String) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.daysoffType = daysoffType;
        this.status = status;
        this.reason = reason;
        this.employeeId = employeeId;
    }

    public getStartDate() {
        return this.startDate;
    }

    public getEndDate() {
        return this.endDate;
    }

    public getDaysOffType() {
        return this.daysoffType;
    }

    public getStatus() {
        return this.status;
    }

    public getReason() {
        return this.reason;
    }

    public getEmployeeId() {
        return this.employeeId;
    }

}
