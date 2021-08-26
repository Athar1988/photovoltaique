import { TestBed } from '@angular/core/testing';

import { AithguardGuard } from './aithguard.guard';

describe('AithguardGuard', () => {
  let guard: AithguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AithguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
