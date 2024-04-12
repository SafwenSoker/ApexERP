import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { RolesService } from '../services/employees-management-portal/roles.service'; 
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    private rolesService: RolesService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // Force the user to log in if currently unauthenticated.
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
    }

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.every((role) => this.roles.includes(role));
  }
  public setRoles(){
    let userRoleNames = this.keycloak.getUserRoles(true);
    console.log("All user role names:", userRoleNames);
    // console.log("All user role names:", userRoleNames);
    // let userOverviewRolesNames = userRoleNames.filter(role => role.startsWith(dashboard));
    // console.log("Overview roles: ", userOverviewRolesNames);
    this.rolesService.getRoles().pipe(first()).subscribe(
      roles => {
        console.log("All roles: ", roles)
        let userRoles = roles.filter(role => userRoleNames.includes(role.name));
        let rolesDescriptions = [];
        for (let role of userRoles) {
          rolesDescriptions.push(role.description);
          if (role.composite) {
            this.rolesService.getCompositesOfRole(role.id).subscribe(composites => {
              role.composites = composites;
              rolesDescriptions.push(...composites.map(composite => composite.description));
            });
          }
        }
        console.log("Roles descriptions: ", rolesDescriptions)
        localStorage.setItem('roles', JSON.stringify(rolesDescriptions));
      }
    );
  }


  public getRoles(): string[]{
    return JSON.parse(localStorage.getItem('roles'));
  }
  public getRolesOfSection(section: string): string[] {
    let rolesDescriptions = JSON.parse(localStorage.getItem('roles'));
    let authorizedUserRoles = rolesDescriptions.filter(role => role.startsWith(section));
    return authorizedUserRoles;
  }
}
