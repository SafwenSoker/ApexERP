import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';
import { BenefitType } from 'src/app/models/self-service-portal/benefit-type';
import { Benefit } from 'src/app/models/self-service-portal/benefit.class';
import { BenefitsService } from 'src/app/services/self-service-portal/benefits.service';

@Component({
  selector: 'app-get-benefits',
  templateUrl: './get-benefits.component.html',
  styleUrl: './get-benefits.component.scss'
})
export class GetBenefitsComponent implements OnInit, OnDestroy {
  benefits: Benefit[];
  items!: MenuItem[];
  manager: boolean = true;
  private ngUnsubscribe = new Subject<void>();
  createBenefitDialog: boolean = false;

  constructor(private benefitsService: BenefitsService) { }

  ngOnInit() {
    this.benefitsService.getBenefits().pipe(
      takeUntil(this.ngUnsubscribe)).subscribe(
        (benefits) => {
          this.benefits = benefits;
        }
      );

    this.items = [
      { label: 'Benefits', routerLink: '/self-service-portal/benefits', styleClass:"flex-1 align-items-center justify-content-center text-center" },
      { label: 'Benefits Requests', routerLink: '/self-service-portal/benefits/requests', styleClass:"flex-1 align-items-center justify-content-center text-center" },
    ];
  }

  newBenefitCreated(event: boolean) {
    if (event) {
      this.benefitsService.getBenefits().pipe(
        takeUntil(this.ngUnsubscribe)).subscribe(
          (benefits) => {
            this.benefits = benefits;
          }
        );
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
