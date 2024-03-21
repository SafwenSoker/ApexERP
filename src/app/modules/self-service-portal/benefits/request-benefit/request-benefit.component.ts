import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Benefit } from 'src/app/models/self-service-portal/benefit.class';

@Component({
  selector: 'app-request-benefit',
  templateUrl: './request-benefit.component.html',
  styleUrl: './request-benefit.component.scss'
})
export class RequestBenefitComponent {
  @Input() benefit: Benefit;
  requestBenefitFormGroup: FormGroup;
  visible: boolean = false;

  constructor() { }

  ngOnInit() {
    this.requestBenefitFormGroup = new FormGroup({
      motivation: new FormControl()
    });
  }
  sendBenefitRequest() {
    console.log("Benefit Request Sent");
    this.visible = false;
  }
  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
}
