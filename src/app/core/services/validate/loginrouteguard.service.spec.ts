import { TestBed, inject } from '@angular/core/testing';

import { LoginRouteGuard  } from './loginrouteguard.service';

describe('LoginrouteguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginRouteGuard ]
    });
  });

  it('should be created', inject([LoginRouteGuard ], (service: LoginRouteGuard ) => {
    expect(service).toBeTruthy();
  }));
});
