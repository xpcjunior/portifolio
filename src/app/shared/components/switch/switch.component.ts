import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [TranslateModule],
  selector: 'app-switch',
  template: `
  <label class="switch">
      <input type="checkbox"
        [checked]="lang_pt"
        (change)="changeLanguage()">
      <span class="slider round"></span>
  </label>
  `,
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {

  lang_pt: Boolean = true;

  constructor(private translate: TranslateService) {}
  
  changeLanguage() {
    this.lang_pt = !this.lang_pt;
    if(this.lang_pt) {
      this.translate.use('pt');
    } else {
      this.translate.use('en');
    }
  }

}
