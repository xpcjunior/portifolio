import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CircleButtonComponent } from '../circle-button/circle-button.component';

@Component({
  standalone: true,
  imports: [CommonModule, CircleButtonComponent],
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input('project-name')
  nome: string = '';

  @Input('project-descr')
  descr: string = '';

  @Input('orientation')
  orientacao: Boolean = false;

}
