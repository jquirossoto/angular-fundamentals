 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    let result: string;
    switch(value) {
      case 1:
        result = 'Half hour';
        break;
      case 2:
        result = "One hour";
        break;
      case 3:
        result = "Half day";
        break;
      case 4:
        result = "Full day";
        break;
      default:
        result = value.toString()
        break;
    }
    return result;
  }

}
