import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourMinute'
})
export class HourMinutePipe implements PipeTransform {

  transform(seconds: number): string {

    seconds=  parseInt( seconds.toString().replace('.',''))

    const hour= parseInt(  (seconds/3600).toFixed() )

    const minutes= parseInt ( ((seconds-(3600*hour))/60).toFixed().replace('-','') )

    let result=hour+' hora'

    if(hour>1){ result= result.concat('s')}

    result=result.concat(' e '+minutes.toFixed()+' minuto')

    if(minutes>1)result=result.concat('s')

    return result
}

}
