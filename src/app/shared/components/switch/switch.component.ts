import { Component } from '@angular/core';
import { TranslationModule } from '../../modules/translation.module';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-switch',
  template: `
  <label class="switch">
      <input type="checkbox"
        [checked]="lang_pt"
        (change)="changeLanguage()">
      <span class="slider round"></span>
  </label>
  `,
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {

  lang_pt: Boolean = true;

  constructor(private translate: TranslationModule) {}
  
  changeLanguage() {
    this.lang_pt = !this.lang_pt;
    if(this.lang_pt) {
      this.translate.usePtLanguage();
    } else {
      this.translate.useEnLanguage();
    }
  }

}
