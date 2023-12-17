import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textManipulation'
})
export class TextManipulationPipe implements PipeTransform {

  transform(value: any): any {
    if (value) {
      return value
        .split('_')
        .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    return value;
  }
}
