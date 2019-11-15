import {ViewportScroller} from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef, Input, OnDestroy, TemplateRef,
  ViewChild
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'lab-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pageSection', {static: false}) public pageSection: ElementRef;

  @Input('mainSection') public mainSection: TemplateRef<HTMLElement>;
  @Input('sidebarSection') public sidebarSection: TemplateRef<HTMLElement>;
  @Input('sidebarEntries') public sidebarEntries: string[] = [];
  @Input('logo') public logo: string;
  private destroy$$ = new Subject();
  private fragment$$ = new BehaviorSubject<string | null>(null);
  private fragment$ = this.fragment$$.asObservable();

  constructor(private viewScroller: ViewportScroller, private route: ActivatedRoute) {
    this.route.fragment.pipe(takeUntil(this.destroy$$)).subscribe(fragment => {
      this.fragment$$.next(fragment);
    });
  }

  public ngAfterViewInit(): void {
    this.fragment$.pipe(takeUntil(this.destroy$$)).subscribe(fragment => {
      if (!!fragment) {
        document.querySelector('#' + fragment).scrollIntoView();
      }
    });
    this.setNavEntries();
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }

  public setNavEntries(): void {
    for (const child of this.pageSection.nativeElement.children) {
      console.log(child);
      if (child.id) {
        console.log('section', child.id);
        this.sidebarEntries.push(child.id);
      }
    }
  }
}
