import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-circle-button',
  template: `
  <a [href]="url" target="_blank" type="button" class="btn btn-default btn-circle grow" [ngClass]="{'btn-lg': size === 'm', 'btn-xl': size === 'g'}">
    <ng-content></ng-content>
  </a>
  `,
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent {

  @Input('size')
  size: string = 'p'

  @Input('link-url')
  url: string = '#'

}
