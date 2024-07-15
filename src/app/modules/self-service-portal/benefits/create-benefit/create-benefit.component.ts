import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BenefitType } from 'src/app/models/self-service-portal/benefit-type';
import { BenefitsService } from 'src/app/services/self-service-portal/benefits.service';

@Component({
  selector: 'app-create-benefit',
  templateUrl: './create-benefit.component.html',
  styleUrl: './create-benefit.component.scss'
})
export class CreateBenefitComponent implements OnInit {
  @Input() createBenefitDialog: boolean = false;
  submitted: boolean = false;
  benefitTypes: any[] = [];

  benefit: any = {
    name: '',
    description: '',
    type: '',
    imageBackgroundUri: ''
  };

  constructor(private benefitsService: BenefitsService, private messageService: MessageService) { }

  ngOnInit() {
    this.benefitTypes = Object.keys(BenefitType).map(key => ({
      label: BenefitType[key],
      value: BenefitType[key]
    }));
  }

  hideDialog() {
    this.createBenefitDialog = false;
    this.submitted = false;
    this.benefit = {
      name: '',
      description: '',
      type: '',
      imageBackgroundUri: ''
    };
  }

  onAddBenefit() {
    this.submitted = true;
    console.log(this.benefit)
    if (this.benefit.name && this.benefit.description && this.benefit.type && this.benefit.imageBackgroundUri) {
      this.benefitsService.newBenefit(this.benefit).subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Benefit created successfully' });
          this.hideDialog();
        },
        error => {
          this.hideDialog();
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create benefit' });
        }
      );
    }
  }
}