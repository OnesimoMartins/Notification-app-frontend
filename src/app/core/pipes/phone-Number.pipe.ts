import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string):string {
    const numbers=Array.from(value)

    let result=''

    for (let index = 0,count=1; index < numbers.length; index++,count++) {
          result += numbers[index]
          if(count%3==0)
           result+=' '
    }
    return result;
  }

}
