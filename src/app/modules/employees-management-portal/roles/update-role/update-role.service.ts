import { ComponentFactoryResolver, Injectable, ViewContainerRef } from "@angular/core";
import { UpdateRoleComponent } from "./update-role.component";
import { Role } from "src/app/models/user-management-portal/role.model"; 
@Injectable({
    providedIn: 'root'
  })
export class UpdateRoleService {
    private rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver) {
        this.factoryResolver = factoryResolver;
    }
    setRootViewContainerRef(viewContainerRef) {
        this.rootViewContainer = viewContainerRef;
    }
    addDynamicComponent(role: Role) {
        const factory = this.factoryResolver.resolveComponentFactory(UpdateRoleComponent);
        const component = factory.create(this.rootViewContainer.parentInjector);
        component.instance.role = role;
        // Subscribe to the closeModal event and destroy the component
        component.instance.closeUpdateRole.subscribe(() => this.removeDynamicComponent(component));

        this.rootViewContainer.insert(component.hostView);
    }

    removeDynamicComponent(component) {
        component.destroy();
    }
}
