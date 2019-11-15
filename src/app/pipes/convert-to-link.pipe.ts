import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'convertToLink'
})
export class ConvertToLinkPipe implements PipeTransform {

  public transform(value: string, linkText: string = value): string {
    if(value) {
      let link: string;
      let replacePattern1: RegExp;
      let replacePattern2: RegExp;
      let replacePattern3: RegExp;

      // URLs starting with http://, https://, or ftp://
      replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
      link = value.replace(replacePattern1, '<a class="mat-accent" href="$1" target="_blank">' + linkText + '</a>');

      // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
      replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
      link = link.replace(replacePattern2, '<a class="mat-accent" href="https://$2" target="_blank">' + linkText + '</a>');

      // Change email addresses to mailto:: links.
      replacePattern3 = /(([a-zA-Z0-9\-.])+([@])[a-zA-Z0-9\-]+?(\.[a-zA-Z]{2,8}))/gim;
      link = link.replace(replacePattern3, '<a class="mat-accent" href="mailto:$1">$1</a>');

      return link;
    }
  }

}
