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
                    
                    { path: 'employees-management-portal/employees', loadChildren: () => import('./modules/user-management-portal/users/users.module').then(m => m.UsersModule)},
                    { path: 'employees-management-portal/groups', loadChildren: () => import('./modules/user-management-portal/groups/groups.module').then(m => m.GroupsModule)},
                    { path: 'employees-management-portal/roles', loadChildren: () => import('./modules/user-management-portal/roles/roles.module').then(m => m.RolesModule)},
                    
                    { path: 'self-service-portal/dayoff-requests', loadChildren: () => import('./modules/self-service-portal/dayoff-requests/dayoff-requests.module').then(m => m.DayoffRequestsModule)},
                    { path: 'self-service-portal/benefits', loadChildren: () => import('./modules/self-service-portal/benefits/benefits.module').then(m => m.BenefitsModule)},
                    { path: 'self-service-portal/events', loadChildren: () => import('./modules/self-service-portal/events/events.module').then(m => m.EventsModule)},
                    { path: 'self-service-portal/trainings', loadChildren: () => import('./modules/self-service-portal/trainings/trainings.module').then(m => m.TrainingsModule)},
                    
                    { path: 'workstation-portal/my-timesheet', loadChildren: () => import('./modules/workstation-portal/timesheet/timesheet.module').then(m => m.TimesheetModule)},
                    { path: 'workstation-portal/document-editor', loadChildren: () => import('./modules/workstation-portal/document-editor/document-editor.module').then(m => m.DocumentEditorModule)},
                    
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
