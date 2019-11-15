import {Component, Input, OnInit} from '@angular/core';

export enum NoteTypeEnum {
  Warning = 'Warning',
  Note = 'Note',
  ToDo = 'ToDo'
}

@Component({
  selector: 'lab-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  @Input() public noteType: NoteTypeEnum = NoteTypeEnum.Note;
  public noteTypeEnum = NoteTypeEnum;
  public noteTypeEnumr;

  constructor() {
  }

  ngOnInit() {
  }

}
