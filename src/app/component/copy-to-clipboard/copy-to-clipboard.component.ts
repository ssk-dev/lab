import {Component, Input} from '@angular/core';

@Component({
  selector: 'lab-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.scss']
})
export class CopyToClipboardComponent {
  @Input() public copy: string | object;

  public copyToClipboard(): void {
    const listener: EventListener = (e: ClipboardEvent): void => {
      e.clipboardData.setData('text/plain', this.copy.toString());
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
}
