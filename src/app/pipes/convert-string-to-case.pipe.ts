import {Pipe, PipeTransform} from '@angular/core';
// https://chaseonsoftware.com/most-common-programming-case-types/
// Camel case for variables and methods.
// Pascal case for types, classes, interfaces and enum.
// Upper case snake case for constants

export enum StrinCaseEnum {
  kebabCase = 'kebab-case', // my-example
  camelCase = 'camel-case', // myExample
  pascalCase = 'pascal-case', // MyExample
  snakeCase = 'snake-case', // my_example
  upperSnakeCase = 'upper-snake-case' // MY_EXAMPLE
}

@Pipe({
  name: 'convertStringToCase'
})
export class ConvertStringToCasePipe implements PipeTransform {

  public transform(value: string, type: string): string {
    if(value !== typeof undefined) {
      switch (type) {
        case StrinCaseEnum.kebabCase:
          return value.toString().toLowerCase().replace(/[ _+~*.:,;]/gi, '-');
      }
    }
  }
}
