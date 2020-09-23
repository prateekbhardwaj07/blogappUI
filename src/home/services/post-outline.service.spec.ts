import { TestBed } from '@angular/core/testing';

import { PostOutlineService } from './post-outline.service';

describe('PostOutlineService', () => {
  let service: PostOutlineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostOutlineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
