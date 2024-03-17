import { DaysOffStatus } from "./days-off-status.model";
import { DaysOffType } from "./days-off-type.model";

export class DayOffRequest {
    private startDate: Date;
    private endDate: Date;
    private daysoffType: DaysOffType;
    private status: DaysOffStatus;
    private reason: String;
    private userId: String;

    constructor(startDate: Date, endDate: Date, daysoffType: DaysOffType, status: DaysOffStatus, reason: String, userId: String) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.daysoffType = daysoffType;
        this.status = status;
        this.reason = reason;
        this.userId = userId;
    }
}
