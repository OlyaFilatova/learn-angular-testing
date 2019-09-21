import { ValueService } from './value.service';
import { TestBed } from '@angular/core/testing';

describe('Test simple service using TestBed', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService]});
    service = TestBed.get(ValueService);
  });

  it('should use ValueService', () => {
    expect(service.getValue()).toBe('real value');
  });
});
