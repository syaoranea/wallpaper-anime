import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaImgComponent } from './galeria.component';

describe('GaleriaComponent', () => {
  let component: GaleriaImgComponent;
  let fixture: ComponentFixture<GaleriaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
