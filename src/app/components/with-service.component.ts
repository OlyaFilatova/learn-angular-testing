import { Component, OnInit } from '@angular/core';
import { WithServiceService } from './with-service.service';

@Component({
  template: ''
})
export class WithServiceComponent implements OnInit {
  value: string;
  constructor(private withService: WithServiceService) {}

  ngOnInit(): void {
    this.value = this.withService.switchedOn ? 'Is on' : 'Switch on the ' + this.withService.name;
  }
}
