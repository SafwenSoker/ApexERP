import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createProject } from '../../state/project.actions';
import { Project } from 'src/app/models/project-management-portal/project.model';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

  projectFormGroup: FormGroup;
  visible: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.projectFormGroup = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }
  createNewProject() {
    var formData: any= new FormData();
    formData.set('name', this.projectFormGroup.value.name);
    formData.set('description', this.projectFormGroup.value.description);   
    this.store.dispatch(createProject({newProject: formData}))
    this.visible = false;
  }
  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

}
