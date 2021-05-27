import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariDisplayComponent } from './comentari-display.component';

describe('ComentariDisplayComponent', () => {
  let component: ComentariDisplayComponent;
  let fixture: ComponentFixture<ComentariDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
