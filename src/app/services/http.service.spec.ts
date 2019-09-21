import { HttpService } from './http.service';
import { Result } from './result.model';

import { defer } from 'rxjs';
export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('Test http service', () => {
	let httpClientSpy: { get: jasmine.Spy };
	let httpService: HttpService;

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
		httpService = new HttpService(<any> httpClientSpy);
	});

	it('should return expected results (HttpClient called once)', () => {
		const expectedResults: Result[] = [
			{ id: 1, value: 'test 1' },
			{ id: 2, value: 'test 2' }
		];

		httpClientSpy.get.and.returnValue(asyncData(expectedResults));

		httpService.getResults().subscribe(
			results => expect(results).toEqual(expectedResults, 'expected results'),
			fail
		);

		expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
	});
});
