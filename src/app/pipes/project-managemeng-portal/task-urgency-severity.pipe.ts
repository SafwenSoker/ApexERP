import { Pipe, PipeTransform } from '@angular/core';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';

@Pipe({
  name: 'taskUrgencySeverity',
  standalone: true
})
export class TaskUrgencySeverityPipe implements PipeTransform {

  transform(value: TaskUrgency, ...args: unknown[]): String {
    switch (value) {
      case TaskUrgency.LOW:
        return 'primary';
      case TaskUrgency.MEDIUM:
        return 'warning';
      case TaskUrgency.HIGH:
        return 'danger';
      default:
        return 'danger';
    }
  }

}
