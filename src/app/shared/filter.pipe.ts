import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
    

    transform(value: any, searchString?: any): any {
        if (!searchString) {
          return value;
        }
        return value.filter((val) => {
          let rVal = (val.name.toLowerCase().includes(searchString.toLowerCase())) || (val.date.toLowerCase().includes(searchString.toLowerCase()));
          return rVal;
        })
    
      }
    
}