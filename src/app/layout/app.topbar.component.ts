import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrl: './app-topbar.css'
})
export class AppTopBarComponent {

    user: string ="";
    ngOnInit(): void {
        this.initializeUserOptions();
    }

    private async initializeUserOptions(): Promise<void> {
        this.user = (await this.keycloakService.loadUserProfile()).firstName
        
        console.log(await this.keycloakService.loadUserProfile());
        console.log(this.keycloakService.getKeycloakInstance().responseType);
    }

    logout(): void {
        this.keycloakService.logout();
    }
    redirectToProfile() {
        this.keycloakService.getKeycloakInstance().accountManagement();
    }


    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private keycloakService: KeycloakService,private router: Router) { }
}
