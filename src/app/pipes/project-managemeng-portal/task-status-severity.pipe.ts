import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';

@Pipe({
  name: 'taskStatusSeverity',
  standalone: true
})
export class TaskStatusSeverityPipe implements PipeTransform {

  transform(value: TaskStatus, ...args: unknown[]): String {
    switch (value) {
      case TaskStatus.NEW:
        return 'info';
      case TaskStatus.IN_PROGRESS:
        return 'primary';
      case TaskStatus.ON_HOLD:
        return 'warning';
      case TaskStatus.DONE:
        return 'success';
      default:
        return 'Unknown';
    }
  }

}
