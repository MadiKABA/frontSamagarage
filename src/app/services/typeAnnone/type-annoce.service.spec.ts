import { TestBed } from '@angular/core/testing';

import { TypeAnnoceService } from './type-annoce.service';

describe('TypeAnnoceService', () => {
  let service: TypeAnnoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeAnnoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
