import { ComponentFactoryResolver, Injectable, ViewContainerRef } from "@angular/core";
import { UpdateEmployeeComponent } from "./update-employee.component"; 
import { Employee } from "src/app/models/user-management-portal/employee.model"; 

@Injectable({
    providedIn: 'root'
  })
export class UpdateEmployeeService {
    private rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addDynamicComponent(employee: Employee) {
        const factory = this.factoryResolver.resolveComponentFactory(UpdateEmployeeComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.employee = employee;
        // Subscribe to the closeModal event and destroy the component
        component.instance.closeUpdateEmployee.subscribe(() => this.removeDynamicComponent(component));

        this.rootViewContainer.insert(component.hostView);
    }

    removeDynamicComponent(component) {
        component.destroy();
    }
}
