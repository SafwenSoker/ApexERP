import { Pipe, PipeTransform } from '@angular/core';
import { Status } from 'src/app/models/project-management-portal/status.model';

@Pipe({
  name: 'taskStatusSeverity',
  standalone: true
})
export class TaskStatusSeverityPipe implements PipeTransform {

  transform(value: Status, ...args: unknown[]): String {
    switch (value) {
      case Status.IN_PROGRESS:
        return 'primary';
      case Status.ON_HOLD:
        return 'danger';
        case Status.TO_REVIEW:
        return 'warning';
      case Status.FINISHED:
        return 'success';
      default:
        return 'Unknown';
    }
  }

}
