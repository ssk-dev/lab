import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IFileStructure} from '../../component/angular/angular.component';

@Component({
  selector: 'lab-file-tree-viewer',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit, AfterViewInit {
  @Input() public data: IFileStructure;
  public hidden = true;
  @Input() public index: number = 0;
  @Input() public searchInDescription: string = '';
  @ViewChild('file', {static: true}) public file: ElementRef;

  public ngOnInit(): void {
    this.increment();
  }

  public log(event): void {
    console.log('event', event);
  }

  public increment(): void {
    this.index++;
  }

  public ngAfterViewInit(): void {
    console.log(this.file);
  }
}
