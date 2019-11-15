import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[labFileTree]'
})
export class FileTreeDirective {

  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setStyle(this.el.nativeElement, 'background', 'yellow');
  }

}
