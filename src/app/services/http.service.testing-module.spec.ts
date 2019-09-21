import { 
	HttpClientTestingModule, 
	HttpTestingController 
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

class Data {
	name: string;
}

describe('Test http service with HttpClientTestingModule', () => {
	const testUrl = 'test/url';
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientTestingModule ]
		});

		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('can test HttpClient.get', () => {
		const testData: Data = {name:'Test Data'};
		httpClient.get<Data>(testUrl).
			subscribe(data => expect(data).toEqual(testData));
		const req = httpTestingController.expectOne('test/url');

		expect(req.request.method).toEqual('GET');

		req.flush(testData);
	});

	it('can test for 404 error', () => {
	  const emsg = 'deliberate 404 error';
	  httpClient.get<Data[]>(testUrl).subscribe(
	    data => fail('should have failed with the 404 error'),
	    (error: HttpErrorResponse) => {
	      expect(error.status).toEqual(404, 'status');
	      expect(error.error).toEqual(emsg, 'message');
	    }
	  );
	  const req = httpTestingController.expectOne(testUrl);
	  req.flush(emsg, { status: 404, statusText: 'Not Found' });
	});

	it('can test for network error', () => {
	  const emsg = 'simulated network error';
	  httpClient.get<Data[]>(testUrl).subscribe(
	    data => fail('should have failed with the network error'),
	    (error: HttpErrorResponse) => {
	      expect(error.error.message).toEqual(emsg, 'message');
	    }
	  );
	  const req = httpTestingController.expectOne(testUrl);
	  const mockError = new ErrorEvent('Network error', {
	    message: emsg,
	  });
	  req.error(mockError);
	});

	afterEach(() => {
		httpTestingController.verify();
	});
});