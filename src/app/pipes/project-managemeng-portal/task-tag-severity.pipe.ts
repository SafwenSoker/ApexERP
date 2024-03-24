import { Pipe, PipeTransform } from '@angular/core';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';

@Pipe({
  name: 'taskTagSeverity',
  standalone: true
})
export class TaskTagSeverityPipe implements PipeTransform {

  transform(value: TaskTag, ...args: unknown[]): String {
    switch (value) {
      case TaskTag.BUG:
        return 'danger';
      case TaskTag.FEATURE:
        return 'success';
      case TaskTag.IMPROVEMENT:
        return 'info';
      case TaskTag.DOCUMENTATION:
        return 'primary';
      case TaskTag.REFACTORING:
        return 'warning';
      default:
        return 'danger';
    }
  }

}
