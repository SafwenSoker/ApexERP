import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";



@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    
                    { path: 'project-management-portal/my-projects', loadChildren: () => import('./modules/project-management-portal/projects/projects.module').then(m => m.ProjectsModule)},
                    
                    { path: 'employees-management-portal/employees', loadChildren: () => import('./modules/employees-management-portal/employees/employees.module').then(m => m.EmployeesModule)},
                    { path: 'employees-management-portal/roles', loadChildren: () => import('./modules/employees-management-portal/roles/roles.module').then(m => m.RolesModule)},
                    
                    { path: 'self-service-portal/my-info', loadChildren: () => import('./modules/self-service-portal/user-personal-information/user-personal-information.module').then(m => m.UserPersonalInformationModule)},
                    { path: 'self-service-portal/daysoff', loadChildren: () => import('./modules/self-service-portal/daysoff/daysoff.module').then(m => m.DaysoffModule)},
                    { path: 'self-service-portal/benefits', loadChildren: () => import('./modules/self-service-portal/benefits/benefits.module').then(m => m.BenefitsModule)},
                    
                    { path: 'workstation-portal/my-timesheet', loadChildren: () => import('./modules/workstation-portal/timesheet/timesheet.module').then(m => m.TimesheetModule)},
                    { path: 'workstation-portal/document-editor', loadChildren: () => import('./modules/workstation-portal/document-editor/document-editor.module').then(m => m.DocumentEditorModule)},
                    
                    { path: 'evaluation-portal/assessment', loadChildren: () => import('./modules/evaluation-portal/assessment/assessment.module').then(m => m.AssessmentModule)},
                    { path: 'evaluation-portal/self-assessment', loadChildren: () => import('./modules/evaluation-portal/self-assessment/self-assessment.module').then(m => m.SelfAssessmentModule)},
                    { path: 'evaluation-portal/manager-evaluation', loadChildren: () => import('./modules/evaluation-portal/manager-evaluation/manager-evaluation.module').then(m => m.ManagerEvaluationModule)},
                    { path: 'evaluation-portal/development-plan', loadChildren: () => import('./modules/evaluation-portal/development-plan/development-plan.module').then(m => m.DevelopmentPlanModule)},
                    { path: 'evaluation-portal/follow-up-meetings', loadChildren: () => import('./modules/evaluation-portal/follow-up-meetings/follow-up-meetings.module').then(m => m.FollowUpMeetingsModule)},

                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
