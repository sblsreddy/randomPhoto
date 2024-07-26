import { TestBed } from '@angular/core/testing';

import { UnsplashPhotoService } from './unsplash-photo.service';

describe('UnsplashPhotoService', () => {
  let service: UnsplashPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
