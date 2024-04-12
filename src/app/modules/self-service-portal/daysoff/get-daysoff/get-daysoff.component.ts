import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DaysOffRequest } from 'src/app/models/self-service-portal/days-off-request.model';
import { DaysOffStatus } from 'src/app/models/self-service-portal/days-off-status.model';
import { DayoffsService } from 'src/app/services/self-service-portal/dayoffs.service';

@Component({
  selector: 'app-get-daysoff',
  templateUrl: './get-daysoff.component.html',
  styleUrl: './get-daysoff.component.scss'
})
export class GetDaysoffComponent implements OnInit, OnDestroy {
  daysOffRequests : DaysOffRequest[] = [];

  acceptedDaysOffRequests : DaysOffRequest[] = [];
  pendingDaysOffRequests : DaysOffRequest[] = [];
  declinedDaysOffRequests : DaysOffRequest[] = [];
  daysOffTaken : number;
  daysOffTakenLastMonth: number;
  lastMonthRequests: DaysOffRequest[] = [];
  lastDayOff: DaysOffRequest | null = null;
  lastDayOffRequest: DaysOffRequest | null = null;
  private ngUnsubscribe = new Subject<void>();
  ngOnInit(): void {
    this.daysOffService.getDaysOffRequests().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (response) => {
        this.acceptedDaysOffRequests = response.filter((request) => request.status === DaysOffStatus.ACCEPTED);
        this.pendingDaysOffRequests = response.filter((request) => request.status === DaysOffStatus.PENDING);
        this.declinedDaysOffRequests = response.filter((request) => request.status === DaysOffStatus.DECLINED);
        this.daysOffTaken = this.calculateTotalHours(this.acceptedDaysOffRequests)
        this.daysOffRequests = response
        this.lastMonthRequests = this.filterRequestsLastMonth();
        this.daysOffTakenLastMonth = this.calculateTotalHours(this.lastMonthRequests);
        this.lastDayOff = this.getLastDayOff();
        this.lastDayOffRequest = this.getLastDayOffRequest();
        console.log(this.lastDayOff)
      }
    );  
  }
  getLastDayOff(): DaysOffRequest | null {
    if (this.daysOffRequests.length === 0) {
      return null; // Return null if there are no requests
    }

    // Sort the requests by startDate in descending order
    const sortedRequests = this.daysOffRequests.sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
    for (const request of sortedRequests) {
      if (request.status === DaysOffStatus.ACCEPTED) {
        return request; // Return the first accepted request
      }
    }


    // Retrieve the first item (which will be the request with the latest startDate)
    return sortedRequests[0];
  }

  getLastDayOffRequest(): DaysOffRequest | null {
    if (this.daysOffRequests.length === 0) {
      return null; // Return null if there are no requests
    }

    // Sort the requests by startDate in descending order
    const sortedRequests = this.daysOffRequests.sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });


    // Retrieve the first item (which will be the request with the latest startDate)
    return sortedRequests[0];
  }

  filterRequestsLastMonth(): DaysOffRequest[] {
    const lastMonthStart = new Date();
    lastMonthStart.setMonth(lastMonthStart.getMonth() - 1);
    lastMonthStart.setDate(1);
    lastMonthStart.setHours(0, 0, 0, 0);

    const lastMonthEnd = new Date();
    lastMonthEnd.setDate(0); // Set to last day of previous month
    lastMonthEnd.setHours(23, 59, 59, 999);

    return this.daysOffRequests.filter(request => {
      const startDate = new Date(request.startDate);
      const endDate = new Date(request.endDate);

      return (startDate >= lastMonthStart && startDate <= lastMonthEnd) ||
             (endDate >= lastMonthStart && endDate <= lastMonthEnd) ||
             (startDate <= lastMonthStart && endDate >= lastMonthEnd);
    });
  }
  calculateTotalHours(requests : DaysOffRequest[]): number {
    let totalHours = 0;

    requests.forEach(request => {
      const startDate = new Date(request.startDate);
      const endDate = new Date(request.endDate);

      // Calculate the difference in milliseconds
      const differenceMs = Math.abs(endDate.getTime() - startDate.getTime());

      // Convert milliseconds to hours
      const differenceHours = differenceMs / (1000 * 60 * 60);

      totalHours += differenceHours;
    });

    return totalHours;
  }

  constructor(private daysOffService: DayoffsService){}
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
