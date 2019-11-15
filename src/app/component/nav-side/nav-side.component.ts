import {ViewportScroller} from '@angular/common';
import {AfterViewInit, Component, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'lab-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements AfterViewInit {

  @Input() public sections: HTMLElement[] = [];
  @Input() public navEntries: string[];
  @Input() public logo: string;

  private destroy$$ = new Subject();
  private fragment$$ = new BehaviorSubject<string | null>(null);
  private fragment$ = this.fragment$$.asObservable();
  private fragment: string;

  constructor(private viewScroller: ViewportScroller, private route: ActivatedRoute) {
    this.route.fragment.pipe(takeUntil(this.destroy$$)).subscribe(fragment => {
      this.fragment$$.next(fragment);
    });
  }

  public ngAfterViewInit(): void {
    this.fragment$.pipe(takeUntil(this.destroy$$)).subscribe(fragment => {
      if (!!fragment) {
        document.querySelector('#' + fragment).scrollIntoView();
        this.fragment = fragment;
      }
    });
  }
}
