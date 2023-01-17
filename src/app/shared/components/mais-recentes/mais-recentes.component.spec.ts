import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisRecentesComponent } from './mais-recentes.component';

describe('MaisRecentesComponent', () => {
  let component: MaisRecentesComponent;
  let fixture: ComponentFixture<MaisRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisRecentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
