import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonferencijaDodajComponent } from './konferencija-dodaj.component';

describe('KonferencijaDodajComponent', () => {
  let component: KonferencijaDodajComponent;
  let fixture: ComponentFixture<KonferencijaDodajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonferencijaDodajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonferencijaDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
