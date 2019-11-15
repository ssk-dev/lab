import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TslintComponent } from './tslint.component';

describe('TslintComponent', () => {
  let component: TslintComponent;
  let fixture: ComponentFixture<TslintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TslintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TslintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
