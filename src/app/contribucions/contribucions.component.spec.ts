import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribucionsComponent } from './contribucions.component';

describe('ContribucionsComponent', () => {
  let component: ContribucionsComponent;
  let fixture: ComponentFixture<ContribucionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribucionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribucionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
