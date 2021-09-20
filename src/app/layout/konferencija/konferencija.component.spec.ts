import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonferencijaComponent } from './konferencija.component';

describe('KonferencijaComponent', () => {
  let component: KonferencijaComponent;
  let fixture: ComponentFixture<KonferencijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonferencijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonferencijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
