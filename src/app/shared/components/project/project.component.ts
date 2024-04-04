import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CircleButtonComponent } from '../circle-button/circle-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [CommonModule, CircleButtonComponent, TranslateModule],
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  @Input('project-name')
  nome: string = '';

  @Input('project-descr')
  descr: string = '';

  @Input('project-tags')
  tags: string = '';

  @Input('project-img')
  src_img: string = '';

  @Input('project-code-url')
  code_url: string = '';

  @Input('project-url')
  project_url: string = '#';

  @Input('orientation')
  orientacao: Boolean = false;

}
