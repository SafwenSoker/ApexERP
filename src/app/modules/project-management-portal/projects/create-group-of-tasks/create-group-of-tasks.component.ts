import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createGroupOfTasks } from '../../state/project.actions';

@Component({
  selector: 'app-create-group-of-tasks',
  templateUrl: './create-group-of-tasks.component.html',
  styleUrl: './create-group-of-tasks.component.scss'
})
export class CreateGroupOfTasksComponent {

  groupOfTasksFormGroup: FormGroup;
  visible: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.groupOfTasksFormGroup = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }
  createNewProject() {
    var formData: any= new FormData();
    formData.set('name', this.groupOfTasksFormGroup.value.name);
    formData.set('description', this.groupOfTasksFormGroup.value.description);   
    this.store.dispatch(createGroupOfTasks({newGroupOfTasks: formData}))
    this.visible = false;
  }
  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

}
