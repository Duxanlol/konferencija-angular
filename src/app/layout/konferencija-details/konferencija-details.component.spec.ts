import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonferencijaDetailsComponent } from './konferencija-details.component';

describe('KonferencijaDetailsComponent', () => {
  let component: KonferencijaDetailsComponent;
  let fixture: ComponentFixture<KonferencijaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonferencijaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonferencijaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
