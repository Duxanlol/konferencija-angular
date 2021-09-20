import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzvodjenjeDodajComponent } from './izvodjenje-dodaj.component';

describe('IzvodjenjeDodajComponent', () => {
  let component: IzvodjenjeDodajComponent;
  let fixture: ComponentFixture<IzvodjenjeDodajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzvodjenjeDodajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzvodjenjeDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
