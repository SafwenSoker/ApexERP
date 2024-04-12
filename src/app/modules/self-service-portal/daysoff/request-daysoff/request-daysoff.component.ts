import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { DaysOffRequest } from 'src/app/models/self-service-portal/days-off-request.model';
import { DaysOffStatus } from 'src/app/models/self-service-portal/days-off-status.model';
import { DaysOffType } from 'src/app/models/self-service-portal/days-off-type.model';
import { DayoffsService } from 'src/app/services/self-service-portal/dayoffs.service';

interface DaysOffTypeDropdownItem {
  name: string,
  code: DaysOffType
}

@Component({
  selector: 'app-request-daysoff',
  templateUrl: './request-daysoff.component.html',
  styleUrl: './request-daysoff.component.scss'
})
export class RequestDaysoffComponent implements OnInit, OnDestroy {
  daysOffTypeDropdownItems: DaysOffTypeDropdownItem[] | undefined;

  selectedDaysOffType: DaysOffTypeDropdownItem | undefined;

  requestDaysOffFormGroup!: FormGroup;
  startDate: Date | undefined;
  endDate: Date | undefined;
  date: Date[] | undefined;
  private ngUnsubscribe = new Subject<void>();
  
  constructor(private daysOffService: DayoffsService) { }
  
  ngOnInit() {
    
    this.daysOffTypeDropdownItems = [
      { name: 'Sick Day', code: DaysOffType.SICK_DAY },
      { name: 'Vacation', code: DaysOffType.VACATION },
      { name: 'Personal Reasons', code: DaysOffType.PERSONAL_REASONS }
    ];
    this.requestDaysOffFormGroup = new FormGroup({
      note: new FormControl<string | null>(null)
    });
  }

  

  request(){
    let daysOffRequest = new DaysOffRequest(this.startDate,this.endDate,this.selectedDaysOffType?.code,DaysOffStatus.PENDING,this.requestDaysOffFormGroup.get('note')?.value,"");
    console.log(daysOffRequest)
    this.daysOffService.newDaysOffRequest(daysOffRequest).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  reset(){}
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



}
