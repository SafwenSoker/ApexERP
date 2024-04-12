import { Pipe, PipeTransform } from '@angular/core';
import { Status } from 'src/app/models/project-management-portal/status.model';

@Pipe({
  name: 'taskStatusValue',
  standalone: true
})
export class TaskStatusValuePipe implements PipeTransform {

  transform(value: Status, ...args: unknown[]): String {
    switch (value) {
      case Status.IN_PROGRESS:
        return 'In Progress';
      case Status.TO_REVIEW:
        return 'To REVIEW';
      case Status.ON_HOLD:
        return 'On Hold';
      case Status.FINISHED:
        return 'Finished';
      default:
        return 'Unknown';
    }
  }

}
