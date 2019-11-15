import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToTitle'
})
export class ConvertToTitlePipe implements PipeTransform {

  public transform(value: any): any {
    const replaceSpecialChars: string = value.toString().toLowerCase().replace(/[ _\-+~*.:,;]/gi, ' ');
    return replaceSpecialChars.charAt(0).toUpperCase() + replaceSpecialChars.slice(1);
  }

}
