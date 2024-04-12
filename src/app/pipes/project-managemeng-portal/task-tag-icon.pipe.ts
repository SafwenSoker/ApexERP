import { Pipe, PipeTransform } from '@angular/core';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';

@Pipe({
  name: 'taskTagIcon',
  standalone: true
})
export class TaskTagIconPipe implements PipeTransform {

  transform(value: TaskTag, ...args: unknown[]): String {
    switch (value) {
      case TaskTag.BUG:
        return 'pi pi-fw pi-wrench';
      case TaskTag.FEATURE:
        return 'pi pi-fw pi-plus-circle';
      case TaskTag.IMPROVEMENT:
        return 'pi pi-fw pi-arrow-circle-up';
      case TaskTag.DOCUMENTATION:
        return 'pi pi-fw pi-book';
      case TaskTag.REFACTORING:
        return 'pi pi-fw pi-replay';
      default:
        return 'pi pi-fw pi-file-edit';
    }
  }

}
