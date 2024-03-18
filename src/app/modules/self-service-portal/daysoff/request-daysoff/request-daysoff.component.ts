import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DaysOffType } from 'src/app/models/self-service-portal/days-off-type.model';

interface DaysOffTypeDropdownItem {
  name: string,
  code: DaysOffType
}

@Component({
  selector: 'app-request-daysoff',
  templateUrl: './request-daysoff.component.html',
  styleUrl: './request-daysoff.component.scss'
})
export class RequestDaysoffComponent implements OnInit {
  daysOffTypeDropdownItems: DaysOffTypeDropdownItem[] | undefined;

  selectedDaysOffType: DaysOffTypeDropdownItem | undefined;

  requestDaysOffFormGroup!: FormGroup;
  
  date: Date[] | undefined;


  constructor() { }

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

  request(){}
  reset(){}

}
