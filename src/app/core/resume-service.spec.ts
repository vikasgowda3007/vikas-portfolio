import { TestBed } from '@angular/core/testing';

import { ResumeService } from './resume-service';
import { RESUME } from './data/resume-data';

describe('ResumeService', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the shared resume data', () => {
    expect(service.getResume()).toBe(RESUME);
  });
});
