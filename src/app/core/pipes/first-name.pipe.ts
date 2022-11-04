import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstname'
})
export class FirstNamePipe implements PipeTransform {

  transform(value: string) {
    return value.split(" ")[0];
  }

}
