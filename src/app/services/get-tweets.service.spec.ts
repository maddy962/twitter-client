import { TestBed } from '@angular/core/testing';

import { GetTweetsService } from './get-tweets.service';

describe('GetTweetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetTweetsService = TestBed.get(GetTweetsService);
    expect(service).toBeTruthy();
  });
});
