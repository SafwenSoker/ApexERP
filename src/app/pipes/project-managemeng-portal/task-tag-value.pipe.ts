import { Pipe, PipeTransform } from '@angular/core';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';

@Pipe({
  name: 'taskTagValue',
  standalone: true
})
export class TaskTagValuePipe implements PipeTransform {

  transform(value: TaskTag, ...args: unknown[]): String {
    switch (value) {
      case TaskTag.BUG:
        return 'Bug';
      case TaskTag.FEATURE:
        return 'Feature';
      case TaskTag.IMPROVEMENT:
        return 'Improvement';
      case TaskTag.DOCUMENTATION:
        return 'Documentation';
      case TaskTag.REFACTORING:
        return 'Refactoring';
      default:
        return 'Unknown';
    }
  }

}
