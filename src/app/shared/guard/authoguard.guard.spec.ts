import { TestBed } from '@angular/core/testing';

import { AuthoguardGuard } from './authoguard.guard';

describe('AuthoguardGuard', () => {
  let guard: AuthoguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthoguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
