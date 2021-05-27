import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarisComponent } from './comentaris.component';

describe('ComentarisComponent', () => {
  let component: ComentarisComponent;
  let fixture: ComponentFixture<ComentarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
