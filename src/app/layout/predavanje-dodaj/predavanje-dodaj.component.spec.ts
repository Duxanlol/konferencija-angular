import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavanjeDodajComponent } from './predavanje-dodaj.component';

describe('PredavanjeDodajComponent', () => {
  let component: PredavanjeDodajComponent;
  let fixture: ComponentFixture<PredavanjeDodajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredavanjeDodajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavanjeDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
