import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuComponent } from './app.menu.component';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppConfigModule } from './config/config.module';
import { AppSidebarComponent } from "./app.sidebar.component";
import { AppLayoutComponent } from "./app.layout.component";
import { PROJECT_STATE_NAME } from '../modules/project-management-portal/state/project.selector';
import { StoreModule } from '@ngrx/store';
import { projectsReducer } from '../modules/project-management-portal/state/project.reducer';
import { ProjectsEffects } from '../modules/project-management-portal/state/project.effects';
import { EffectsModule } from '@ngrx/effects';
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        StoreModule.forFeature(PROJECT_STATE_NAME, projectsReducer),
        EffectsModule.forFeature([ProjectsEffects]),
    ],
    exports: [AppLayoutComponent],
    providers: [
        MessageService, ConfirmationService
    ]
})
export class AppLayoutModule { }
