import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Subject } from 'rxjs';
import { BenefitRequest } from 'src/app/models/self-service-portal/benefit-request';
import { BenefitType } from 'src/app/models/self-service-portal/benefit-type';
import { Benefit } from 'src/app/models/self-service-portal/benefit.class';
import { BenefitsService } from 'src/app/services/self-service-portal/benefits.service';

@Component({
  selector: 'app-get-benefits-requests',
  templateUrl: './get-benefits-requests.component.html',
  styleUrl: './get-benefits-requests.component.scss',
  providers: [MessageService, ConfirmationService]
})
export class GetBenefitsRequestsComponent implements OnInit, OnDestroy {

  benefitsRequests: BenefitRequest[];
  benefitRequest: BenefitRequest;
  benefitType=BenefitType;
  items!: MenuItem[];
  manager: boolean = true;
  showMotivationDialogVisible: boolean=false;
  selectedBenefitRequestMotivation: String="";
  private ngUnsubscribe = new Subject<void>();

  constructor(private benefitsService: BenefitsService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.benefitsService.getBenefitsRequestsByManager().subscribe((benefitsRequests) => {
      console.log("benefitsRequests", benefitsRequests);
      this.benefitsRequests = benefitsRequests;
    } );

    this.items = [
      { label: 'Benefits', routerLink: '/self-service-portal/benefits', styleClass: "flex-1 align-items-center justify-content-center text-center" },
      { label: 'Benefits Requests', routerLink: '/self-service-portal/benefits/requests', styleClass: "flex-1 align-items-center justify-content-center text-center" },
    ];
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  acceptBenefitRequest(benefitRequest: BenefitRequest) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to accept this request?',
      accept: () => {
        this.benefitsRequests = this.benefitsRequests.filter((benefit) => benefit.getId() !== benefitRequest.getId());
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Benefit request accepted' });
      }
    });
  }

  rejectBenefitRequest(benefitRequest: BenefitRequest) {
    console.log(benefitRequest);
    this.confirmationService.confirm({
      message: 'Are you sure you want to reject this request?',
      accept: () => {
        this.benefitsRequests = this.benefitsRequests.filter((benefit) => benefit.getId() !== benefitRequest.getId());
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Benefit request rejected' });
      }
    });
  }

  getSeverity(benefitType: BenefitType) {
    switch (benefitType) {
      case BenefitType.MONEY:
        return 'success';
      case BenefitType.PROMOTION:
        return 'info';
      case BenefitType.TROPHY:
        return 'primary';
    }
  }

  viewBenefitRequestMotivation(motivation: String){
    this.selectedBenefitRequestMotivation = motivation;
    this.showMotivationDialogVisible = true;
  }

  closeMotivationDialog(){
    this.showMotivationDialogVisible = false;
  }

}
