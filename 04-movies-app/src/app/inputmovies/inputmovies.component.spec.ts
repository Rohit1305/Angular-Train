import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputmoviesComponent } from './inputmovies.component';

describe('InputmoviesComponent', () => {
  let component: InputmoviesComponent;
  let fixture: ComponentFixture<InputmoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputmoviesComponent]
    });
    fixture = TestBed.createComponent(InputmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
