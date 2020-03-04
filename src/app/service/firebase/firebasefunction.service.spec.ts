import { TestBed } from '@angular/core/testing';

import { FirebasefunctionService } from './firebasefunction.service';

describe('FirebasefunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasefunctionService = TestBed.get(FirebasefunctionService);
    expect(service).toBeTruthy();
  });
});
