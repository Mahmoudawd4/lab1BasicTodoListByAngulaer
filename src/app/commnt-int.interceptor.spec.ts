import { TestBed } from '@angular/core/testing';

import { CommntIntInterceptor } from './commnt-int.interceptor';

describe('CommntIntInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CommntIntInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CommntIntInterceptor = TestBed.inject(CommntIntInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
