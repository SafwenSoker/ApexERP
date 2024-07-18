import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Inplace } from 'primeng/inplace';
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
  noUserHrInfo: boolean=false;
  @ViewChild('hrInfoCINInplace') hrInfoCINInplace!: Inplace;
  @ViewChild('hrInfoStartDateInplace') hrInfoStartDateInplace!: Inplace;
  @ViewChild('hrInfoEndDateInplace') hrInfoEndDateInplace!: Inplace;
  @ViewChild('hrInfoNoteInplace') hrInfoNoteInplace!: Inplace;
  @ViewChild('hrInfoCnssNumberInplace') hrInfoCnssNumberInplace!: Inplace;
  

  private ngUnsubscribe = new Subject<void>();

  constructor(private userHRInfoService: UserHrInformationService){}
  
  ngOnInit(): void {
    this.userHRInfoService.getUserHRInfo().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (userHrInfo) => {
        console.log(userHrInfo)
        this.userHrInfo = userHrInfo;
      },
      (error) => {
        this.noUserHrInfo=true;
      }
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateHrInfo(){
    this.hrInfoCINInplace.deactivate();
    this.hrInfoStartDateInplace.deactivate();
    this.hrInfoEndDateInplace.deactivate();
    this.hrInfoNoteInplace.deactivate();
    this.hrInfoCnssNumberInplace.deactivate();
  }

}
