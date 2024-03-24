import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';

@Pipe({
  name: 'taskStatusIcon',
  standalone: true
})
export class TaskStatusIconPipe implements PipeTransform {

  transform(value: TaskStatus, ...args: unknown[]): String {
    switch (value) {
      case TaskStatus.NEW:
        return 'pi pi-fw ';
      case TaskStatus.IN_PROGRESS:
        return 'pi pi-fw pi-hourglass';
      case TaskStatus.ON_HOLD:
        return 'pi pi-fw pi-stop-circle';
      case TaskStatus.DONE:
        return 'pi pi-fw pi-check-circle';
      default:
        return 'pi pi-fw pi-question-circle';
    }
  }

}
