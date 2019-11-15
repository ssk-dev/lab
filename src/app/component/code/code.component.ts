import {Component, Input} from '@angular/core';
import {CodeTypeEnum, ICodeType} from './code.definitions.component';

@Component({
  selector: 'lab-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  @Input() public code: string | object;
  @Input() public type: CodeTypeEnum;
  @Input() public comment: string;
  public codeType: ICodeType = CodeTypeEnum;
}
