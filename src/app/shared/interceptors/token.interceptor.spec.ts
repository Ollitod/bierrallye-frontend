import {TestBed} from '@angular/core/testing';

import {HttpInterceptorFn} from '@angular/common/http';
import {tokenInterceptor} from './token.interceptor';

describe('tokenInterceptor', () => {
  const executeInterceptor: HttpInterceptorFn = (...interceptorParameters) =>
    TestBed.runInInjectionContext(() => tokenInterceptor(...interceptorParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeInterceptor).toBeTruthy();
  });
});
