import { TestBed } from '@angular/core/testing';

import { LoadEventsResolver } from './load-events.resolver';

describe('LoadEventsResolver', () => {
  let resolver: LoadEventsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoadEventsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
