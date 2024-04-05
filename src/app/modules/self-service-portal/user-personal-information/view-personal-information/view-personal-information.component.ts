import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';
import { UserHrInformationService } from 'src/app/services/self-service-portal/user-hr-information.service';

@Component({
  selector: 'app-view-personal-information',
  templateUrl: './view-personal-information.component.html',
  styleUrl: './view-personal-information.component.scss'
})
export class ViewPersonalInformationComponent implements OnInit, OnDestroy{

  userHrInfo: UserHRInfo;

  private ngUnsubscribe = new Subject<void>();

  constructor(private userHRInfoService: UserHrInformationService){}
  
  ngOnInit(): void {
    this.userHRInfoService.getUserHRInfo(0).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (userHrInfo) => {
        this.userHrInfo = userHrInfo;
      }
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



}
