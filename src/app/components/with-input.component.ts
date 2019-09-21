import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({})
export class WithInputComponent {
  @Input() inp: { value: string };
  @Output() changed = new EventEmitter();

  click() {
    this.changed.emit(this.inp);
  }
}
