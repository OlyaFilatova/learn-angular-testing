import { MasterService } from './master.service';
import { ValueService } from './value.service';


import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeValueService extends ValueService {
  getValue() {
    return 'fake real value';
  }
}


describe('Test service with dependency without Angular testing support', () => {
  let masterService: MasterService;

  it('#getValue should return real value from a real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('#getValue should return faked value from a fake service', () => {
    masterService = new MasterService(new FakeValueService());
    expect(masterService.getValue()).toBe('fake real value');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake = { getValue: () => 'fake value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue())
      .toBe(stubValue, '--service returned stab value');

    expect(valueServiceSpy.getValue.calls.count())
      .toBe(1, '--spy method was called once');

    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });
});

