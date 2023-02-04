import { TestBed } from '@angular/core/testing';

import { GaleriaImgService } from './galeria-img.service';

describe('GaleriaImgService', () => {
  let service: GaleriaImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
