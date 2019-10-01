import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(value, keys: string, term: string, searchText: any): any {

    if (!term) { return value; }
    // tslint:disable-next-line: max-line-length
    return (value || []).filter(arreglo => keys.split(',').some(key => arreglo.hasOwnProperty(key) && new RegExp(term, 'gi').test(arreglo[key])));
  }

}
