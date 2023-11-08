import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-circle-button',
  template: `
  <button type="button" class="btn btn-default btn-circle grow" [ngClass]="{'btn-lg': size === 'm', 'btn-xl': size === 'g'}">
    <ng-content></ng-content>
  </button>
  `,
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent {

  @Input('size')
  size: string = 'btn-lg'

}
