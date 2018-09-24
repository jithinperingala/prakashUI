import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore'
@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let tempArray:Array<any>=value
    if(tempArray)
    return _.sortBy(tempArray,args);
    else 
    return null
  }

}
