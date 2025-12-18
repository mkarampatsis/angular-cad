import { TestBed } from '@angular/core/testing';

import { DxfLoaderService } from './dxf-loader.service';

describe('DxfLoaderService', () => {
  let service: DxfLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DxfLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
