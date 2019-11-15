import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {

  public transform(value: any, returnValue: 'keys' | 'values'): string[] {
    switch (returnValue) {
      case 'keys':
        return Object.keys(value);
      case 'values':
        return Object.values(value);
    }
  }

}
