import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort();
  }

}
