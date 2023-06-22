import { TestBed } from '@angular/core/testing';

import { SharedSidebarService } from './shared-sidebar.service';

describe('SharedSidebarService', () => {
  let service: SharedSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
