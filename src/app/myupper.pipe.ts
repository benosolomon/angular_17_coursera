import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myupper',
  standalone: true
})
export class MyupperPipe implements PipeTransform {

  transform(value: string,param1: string): string {
    if(param1 == 'upper') {
      return value.toUpperCase();
    } else {
      return value.toLowerCase();
    }
  }

}
