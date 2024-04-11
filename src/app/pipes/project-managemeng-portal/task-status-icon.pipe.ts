import { Pipe, PipeTransform } from '@angular/core';
import { Status } from 'src/app/models/project-management-portal/status.model';

@Pipe({
  name: 'taskStatusIcon',
  standalone: true
})
export class TaskStatusIconPipe implements PipeTransform {

  transform(value: Status, ...args: unknown[]): String {
    switch (value) {
      case Status.TO_REVIEW:
        return 'pi pi-fw pi-undo';
      case Status.IN_PROGRESS:
        return 'pi pi-fw pi-hourglass';
      case Status.ON_HOLD:
        return 'pi pi-fw pi-stop-circle';
      case Status.FINISHED:
        return 'pi pi-fw pi-check-circle';
      default:
        return 'pi pi-fw pi-question-circle';
    }
  }

}
