import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, map } from 'rxjs';
import { Role } from 'src/app/models/user-management-portal/role.model'; 
import { Access, Employee } from 'src/app/models/user-management-portal/employee.model'; 

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })
  getEmployees(){
    return new Observable<Employee[]>(observer => {
      observer.next([new Employee("SafwenSoker","222",new Access(),12312311,false,false,1,false,[],[],"Safwen","Soker","safwensoker1@gmail.com",[])])
      observer.complete()
    })
    return this.http.get<Employee[]>('http://localhost:5000/admin/realms/analytix/users').pipe(
      map((result) => {console.log(result); return result;})
    );
  }

  getEmployee(id: string){
    return this.http.get<Employee>('http://localhost:5000/admin/realms/analytix/users/'+id).pipe(
      map((result) => {console.log(result); return result;})
    );
  }

  addEmployee(user: Employee): Observable<Employee>{
    const userKeycloakRepresentation = {
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      emailVerified: true,
      enabled: true,
      credentials: [{type: 'password', value: user.password, temporary: false}],
    }

    return this.http.post<Employee>('http://localhost:5000/admin/realms/analytix/users',userKeycloakRepresentation,{headers:this.headers});
  }


  updateEmployee(user: Employee): Observable<any>{
    let body = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      emailVerified: user.emailVerified,
      enabled: user.enabled   
    }
    return this.http.put('http://localhost:5000/admin/realms/analytix/users/'+user.id,body, { headers: this.headers }).pipe(map((result) => {console.log(result);return result;}));
  }

  deleteEmployee(id: string){
    return this.http.delete('http://localhost:5000/admin/realms/analytix/users/'+id);
  }


  
  getEmployeeRoleMappings(id: string): Observable<Role[]>{
    return this.http.get<{clientMappings: Role[], realmMappings: Role[]}>('http://localhost:5000/admin/realms/analytix/users/'+id+'/role-mappings').pipe(
      map((result) => {return result.realmMappings;})
    );
  }

  addEmployeeRoleMappings(id: string,roles: Role[]){
    let rolesRepresentation = [];
    for(let role of roles) {
      rolesRepresentation.push({id: role.id, name: role.name, composite: role.composite, containerId: role.containerId, description: role.description, clientRole: role.clientRole})
    }
    return this.http.post('http://localhost:5000/admin/realms/analytix/users/'+id+'/role-mappings/realm',rolesRepresentation,{headers: this.headers});
  }

  deleteEmployeeRoleMappings(id: string, roles: Role[]){
    let rolesRepresentation = [];
    for(let role of roles) {
      rolesRepresentation.push({id: role.id, name: role.name, composite: role.composite, containerId: role.containerId, description: role.description, clientRole: role.clientRole})
    }
    return this.http.delete('http://localhost:5000/admin/realms/analytix/users/'+id+'/role-mappings/realm',{headers: this.headers, body: rolesRepresentation});
  
  }
  addEmployeeToGroup(id: string,groupId: string){
    return this.http.put('http://localhost:5000/admin/realms/analytix/users/'+id+'/groups/'+groupId,null,{headers: this.headers});
  }

  deleteEmployeeFromGroup(id: string,groupId: string){
    return this.http.delete('http://localhost:5000/admin/realms/analytix/users/'+id+'/groups/'+groupId,{headers: this.headers});
  }

}
