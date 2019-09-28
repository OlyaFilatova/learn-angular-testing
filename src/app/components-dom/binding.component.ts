import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: ['h1 { color: green; font-size: 350% }']
})
export class BindingComponent {
  title = 'Test title';
}
