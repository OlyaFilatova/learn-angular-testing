import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  template: `
    <button (click)="clicked()">Switch Light!</button>
    <span>{{message}}</span>
  `
})
export class LightSwitchComponent {
  isOn = true;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
