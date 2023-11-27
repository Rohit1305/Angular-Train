import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputmoviesComponent } from './outputmovies.component';

describe('OutputmoviesComponent', () => {
  let component: OutputmoviesComponent;
  let fixture: ComponentFixture<OutputmoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutputmoviesComponent]
    });
    fixture = TestBed.createComponent(OutputmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
