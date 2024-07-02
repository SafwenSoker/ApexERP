import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { KeycloakService } from 'keycloak-angular';


@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    styleUrl: './app-topbar.css'
})
export class AppTopBarComponent {

    user: string ="";
    

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService,private keycloakService: KeycloakService) { }

    logout(): void {
        this.keycloakService.logout();
    }
    redirectToProfile() {
        this.keycloakService.getKeycloakInstance().accountManagement();
    }
}
