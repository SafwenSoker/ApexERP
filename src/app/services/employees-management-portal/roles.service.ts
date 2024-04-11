import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, map } from 'rxjs';
import { Role } from 'src/app/models/user-management-portal/role.model'; 
import { Employee } from 'src/app/models/user-management-portal/employee.model'; 
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  API_URL="http://197.26.19.240:9092"
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  })
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.API_URL+'/admin/realms/analytix/roles').pipe(map((roles) => { console.log(roles); return roles; }));
  }

  getRole(id: string | undefined) {
    return this.http.get<Role>(this.API_URL+'/admin/realms/analytix/roles/' + id);
  }

  getRoleByName(name: string):Observable<Role> {
    return this.http.get<Role>(this.API_URL+'/admin/realms/analytix/roles/' + name);
  }

  addRole(role: Role): Observable<Role> {
    console.log("Role to be created: ", role)
    let roleRepresentation = {
      name: role.name,
      composite: role.composite,
      clientRole: false,
      containerId: "analytix"
    }

    return this.http.post<Role>(this.API_URL+'/admin/realms/analytix/roles', roleRepresentation, { headers: this.headers });
  }
  updateRole(role: Role) {
    let roleRepresentation = {
      name: role.name,

    }
    return this.http.put(this.API_URL+'/admin/realms/analytix/roles/' + role.id, role);
  }

  deleteRole(id: string | undefined) {
    return this.http.delete(this.API_URL+'/admin/realms/analytix/roles/' + id);
  }

  getRoleUsers(name: string | undefined): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL+'/admin/realms/analytix/roles/' + name + '/users');
  }



  addGroupRoleMappings(id: string, role: any): Observable<any> {
    return this.http.post(this.API_URL+'/admin/realms/analytix/groups/b427f1c8-bb38-473b-b6fa-9bf6e229e161/role-mappings/realm', role);
  }

  addCompositesToRole(role: Role): Observable<Role> {
    let compositesRepresentation = []
    for (let composite of role.composites) {
      compositesRepresentation.push({ id: composite.id, name: composite.name, composite: composite.composite, clientRole: composite.clientRole, containerId: composite.containerId })
    }
    return this.http.post<Role>(this.API_URL+'/admin/realms/analytix/roles/' + role.name + '/composites', compositesRepresentation, { headers: this.headers });
  }

  deleteCompositesOfRole(role: Role,composites: Role[]): Observable<Role> {
    let compositesRepresentation = []
    for (let composite of composites) {
      compositesRepresentation.push({ id: composite.id, name: composite.name, composite: composite.composite, clientRole: composite.clientRole, containerId: composite.containerId })
    }
    return this.http.delete<Role>(this.API_URL+'/admin/realms/analytix/roles/' + role.name + '/composites', { headers: this.headers, body: compositesRepresentation});
  }

  getCompositesOfRole(id: string | undefined): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL+'/admin/realms/analytix/roles-by-id/' + id + '/composites');
  }

  getCompositeRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.API_URL+"/admin/realms/analytix/roles?q=composite:true");
  }

}
