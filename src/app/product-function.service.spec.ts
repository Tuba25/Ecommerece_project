import { TestBed } from '@angular/core/testing';

import { ProductFunctionService } from './product-function.service';

describe('ProductFunctionService', () => {
  let service: ProductFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
