import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetColorComponent } from './set-color.component';

describe('SetColorComponent', () => {
  let component: SetColorComponent;
  let fixture: ComponentFixture<SetColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
