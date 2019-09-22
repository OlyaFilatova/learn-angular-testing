import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WithServiceService {
  name = 'bulb';
  switchedOn = false;
}
