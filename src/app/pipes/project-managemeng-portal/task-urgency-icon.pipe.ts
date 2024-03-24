import { Pipe, PipeTransform } from '@angular/core';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';

@Pipe({
  name: 'taskUrgencyIcon',
  standalone: true
})
export class TaskUrgencyIconPipe implements PipeTransform {

  transform(value: TaskUrgency, ...args: unknown[]): String {
    switch (value) {
      case TaskUrgency.LOW:
        return 'pi pi-fw pi-info-circle';
      case TaskUrgency.MEDIUM:
        return 'pi pi-fw pi-exclamation-triangle';
      case TaskUrgency.HIGH:
        return 'pi pi-fw pi-times-circle';
      default:
        return 'pi pi-fw pi-question-circle';
    }
  }

}
