import { Pipe, PipeTransform } from '@angular/core';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';

@Pipe({
  name: 'taskUrgencyValue',
  standalone: true
})
export class TaskUrgencyValuePipe implements PipeTransform {

  transform(value: TaskUrgency, ...args: unknown[]): String {
    switch (value) {
      case TaskUrgency.LOW:
        return 'Low';
      case TaskUrgency.MEDIUM:
        return 'Medium';
      case TaskUrgency.HIGH:
        return 'High';
      default:
        return 'Unknown';
    }
  }

}
