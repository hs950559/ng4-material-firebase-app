import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieQuoteComponent } from './movie-quote.component';

describe('MovieQuoteComponent', () => {
  let component: MovieQuoteComponent;
  let fixture: ComponentFixture<MovieQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
