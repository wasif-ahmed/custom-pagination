import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'LockFilter'
})
export class SearchPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    if (!args) {
      return value;
    }

    // console.log(value);

    args = args.toLowerCase();

    const retrunValue = value.filter(function(item) {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(args);
    });

    return retrunValue.length > 0 ? retrunValue : ['null'];
  }
}
