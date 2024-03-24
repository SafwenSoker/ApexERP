import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';

@Pipe({
  name: 'taskStatusValue',
  standalone: true
})
export class TaskStatusValuePipe implements PipeTransform {

  transform(value: TaskStatus, ...args: unknown[]): String {
    switch (value) {
      case TaskStatus.NEW:
        return 'New';
      case TaskStatus.IN_PROGRESS:
        return 'In Progress';
      case TaskStatus.ON_HOLD:
        return 'On Hold';
      case TaskStatus.DONE:
        return 'Done';
      default:
        return 'Unknown';
    }
  }

}
