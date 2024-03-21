import { Component, Input } from '@angular/core';
import { BenefitType } from 'src/app/models/self-service-portal/benefit-type';
import { Benefit } from 'src/app/models/self-service-portal/benefit.class';

@Component({
  selector: 'app-get-benefit',
  templateUrl: './get-benefit.component.html',
  styleUrl: './get-benefit.component.scss'
})
export class GetBenefitComponent {

  @Input() benefit: Benefit;
  benefitType = BenefitType;
}
