import { TestBed } from '@angular/core/testing';

import { PostContentService } from './post-content.service';

describe('PostContentService', () => {
  let service: PostContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
