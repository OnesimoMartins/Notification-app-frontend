export function FormatPhoneNumber(number:string){
 const numbers=Array.from(number)

 let result=''

 for (let index = 0,count=1; index < numbers.length; index++,count++) {
       result += numbers[index]
       if(count%3==0)
        result+=' '
 }
 return result;
}
