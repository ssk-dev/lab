import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {
  public transform(value: string, search: string): string {
    if(value) {
      const valueStr: string = value.toString();
      return valueStr.replace(new RegExp('(?![^&;]+;)(?!<[^<>]*)(' + search + ')(?![^<>]*>)(?![^&;]+;)', 'gi'),
        '<strong class="highlighted mat-accent">$1</strong>');
    }
  }
}

@Pipe({
  name: 'matchSearch'
})
export class MatchSearchPipe implements PipeTransform {
  public transform(value: string, search: string): boolean {
    const valueStr: string = value.toString().toLowerCase();
    const searchStr: string = search.toLowerCase();
    return !!(valueStr.match(searchStr) && searchStr !== '' && searchStr.length > 1);
  }
}
