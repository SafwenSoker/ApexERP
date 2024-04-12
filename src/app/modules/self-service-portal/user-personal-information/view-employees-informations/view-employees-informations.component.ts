import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';
import { UserHrInformationService } from 'src/app/services/self-service-portal/user-hr-information.service';

@Component({
  selector: 'app-view-employees-informations',
  templateUrl: './view-employees-informations.component.html',
  styleUrl: './view-employees-informations.component.scss'
})
export class ViewEmployeesInformationsComponent implements OnInit, OnDestroy{
  manager: boolean= true;
  items!: MenuItem[];
  employeesInfos: UserHRInfo[];
  private ngUnsubscribe = new Subject<void>();

  constructor(private userHrInfoService: UserHrInformationService){}
  ngOnInit(): void {
    this.items = [
      { label: 'Benefits', routerLink: '/self-service-portal/benefits', styleClass: "flex-1 align-items-center justify-content-center text-center" },
      { label: 'Benefits Requests', routerLink: '/self-service-portal/benefits/requests', styleClass: "flex-1 align-items-center justify-content-center text-center" },
    ];
    this.userHrInfoService.getUserHRinfos(1).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (employeesInfos) => {
        this.employeesInfos = employeesInfos;
      }
    );
  }
  
  
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
