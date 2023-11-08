import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-switch',
  template: `
  <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
  </label>
  `,
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

}
