import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() created = new EventEmitter<boolean>();

  submitted: boolean = false;
  benefitTypes: any[] = [];

  benefit: any = {
    name: '',
    description: '',
    type: '',
    backgroundImageUri: ''
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
      backgroundImageUri: ''
    };
  }

  onAddBenefit() {
    this.submitted = true;
    if (this.benefit.name && this.benefit.description && this.benefit.type && this.benefit.backgroundImageUri) {
      this.benefitsService.newBenefit(this.benefit).subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Benefit created successfully' });
          this.hideDialog();
          this.created.emit(true);
        },
        error => {
          this.hideDialog();
          this.created.emit(false);
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to create benefit' });
        }
      );
    }
  }
}