import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate',
  standalone: true
})
export class PaginatePipe implements PipeTransform {
  transform<T>(array: T[], page: number = 1, limit: number = 10): T[] {
    if (!Array.isArray(array)) return array;
    const start = (page - 1) * limit;
    return array.slice(start, start + limit);
  }
}
