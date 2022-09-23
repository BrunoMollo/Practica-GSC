import { TestBed } from '@angular/core/testing';

import { EventHasBeenRevisedGuard } from './event-has-been-revised.guard';

describe('EventHasBeenRevisedGuard', () => {
  let guard: EventHasBeenRevisedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventHasBeenRevisedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
