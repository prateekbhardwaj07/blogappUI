import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditblogsComponent } from './editblogs.component';

describe('EditblogsComponent', () => {
  let component: EditblogsComponent;
  let fixture: ComponentFixture<EditblogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditblogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
