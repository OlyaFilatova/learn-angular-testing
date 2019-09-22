import { TestBed } from '@angular/core/testing';
import { WithServiceComponent } from './with-service.component';
import { WithServiceService } from './with-service.service';

class MockWithService {
  name = 'gas stove';
  switchedOn = false;
}

describe('Test component with service', () => {
  let comp;
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WithServiceComponent,
        {
          provide: WithServiceService, useClass: MockWithService
        }
      ]
    });

    comp = TestBed.get(WithServiceComponent);
    service = TestBed.get(WithServiceService);

  });
  it('should not have value after construction', () => {
    expect(comp.value).toBeUndefined();
  });

  it('should have value after Angular calls ngOnInit', () => {
    comp.ngOnInit();
    expect(comp.value).toContain(service.name);
  });
  it('should say "Is on" when flag is true', () => {
    service.switchedOn = true;
    comp.ngOnInit();
    expect(comp.value).not.toContain(service.name);
    expect(comp.value).toBe('Is on');
  });
});
