import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootbalComponent } from './footbal.component';

describe('FootbalComponent', () => {
  let component: FootbalComponent;
  let fixture: ComponentFixture<FootbalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootbalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
