import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {CodeTypeEnum, ICode} from '../../code/code.definitions.component';
import {ITsLintRule, TsLintRules} from './tslint.definitions';

@Component({
  selector: 'lab-tslint',
  templateUrl: './tslint.component.html',
  styleUrls: ['./tslint.component.scss']
})
export class TslintComponent {
  public tsconfig: ICode = {
    name: 'tsconfig.json',
    type: CodeTypeEnum.JSON,
    code: {} // loading content from project file
  };
  public tslint: ICode = {
    name: 'tslint.json',
    type: CodeTypeEnum.JSON,
    code: {} // loading content from project file
  };
  public tslintExtends: string = '"extends" : ["tslint:recommended", "rxjs-tslint-rules", ...]';
  public tslintFlags: ICode = {
    name: '',
    type: CodeTypeEnum.TypeScript,
    code: `function validRange (range: any) {
  return range.min <= range.middle && range.middle <= range.max;
}

/* tslint:disable:object-literal-sort-keys */
const range = {
  min: 5,
  middle: 10,    // TSLint will *not* warn about unsorted keys here
  max: 20
};
/* tslint:enable:object-literal-sort-keys */

const point = {
  x: 3,
  z: 5,          // TSLint will warn about unsorted keys here
  y: 4,
}`
  };

  public tslintFileLoaded = false;
  public tsconfigFileLoaded = false;
  public tableColumns: string[] = ['rule', 'description', 'example', 'link'];
  public tableData: MatTableDataSource<ITsLintRule> = new MatTableDataSource(TsLintRules);

  constructor(private http: HttpClient) {
    this.http.get('tsconfig.json')
      .subscribe(data => {
        this.tsconfig.code = data;
        this.tsconfigFileLoaded = true;
      });
    this.http.get('tslint.json')
      .subscribe(data => {
        this.tslint.code = data;
        this.tslintFileLoaded = true;
      });
  }
}
