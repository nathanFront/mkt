import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalagoComponent } from './catalago.component';

describe('CatalagoComponent', () => {
  let component: CatalagoComponent;
  let fixture: ComponentFixture<CatalagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
