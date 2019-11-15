import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'lab-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements AfterViewInit {
  @Input() public code: string | object;
  @Input() public filename: string;
  @Input() public type: string;
  @ViewChild('codeSection', {static: true}) public codeSection: ElementRef;
  public lines: number[] = [];
  public codeInformation: string;
  public isCollapsible: boolean = false;
  public collapsed: boolean = false;

  constructor(public cdr: ChangeDetectorRef) {
  }

  public ngAfterViewInit(): void {
    this.countCodeLines();
    this.collapseLongCode();
    this.cdr.detectChanges();
  }

  private countCodeLines(): void {
    if (this.type) {
      const lines: number[] = this.codeSection.nativeElement.innerText.match(/\n/g) || [];
      const numberOfChars: number = this.codeSection.nativeElement.innerText.length;
      const numberOfLines: number = lines.length + 1;
      for (let i: number = 1; i <= numberOfLines; i++) {
        this.lines.push(i);
      }
      this.codeInformation = this.getCodeInformation(numberOfLines, numberOfChars);
    }
  }

  private getCodeInformation(lines: number, chars: number): string {
    if (this.type) {
      return chars + (chars > 1 ? ' chars' : 'char') +
        ' | ' + lines + (lines > 1 ? ' lines' : 'line') +
        ' | language: ' + this.type;
    }
  }

  private collapseCode(): void {
    if (this.codeSection.nativeElement.offsetHeight > 400) {
      this.collapsed = true;
    }
  }

  private collapseLongCode(): void {
    if (this.codeSection.nativeElement.offsetHeight > 400) {
      this.isCollapsible = true;
      this.collapsed = true;
    }
  }
}
