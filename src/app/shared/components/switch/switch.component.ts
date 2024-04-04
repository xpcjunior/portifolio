import { Component, OnInit } from '@angular/core';
import { TranslationModule } from '../../modules/translation.module';
import { Router } from '@angular/router';

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
export class SwitchComponent implements OnInit {

  lang_pt: Boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.lang_pt = !this.router.url.includes('en');
  }
  
  changeLanguage() {
    if(this.lang_pt) {
      this.router.navigateByUrl('/en');
    } else {
      this.router.navigateByUrl('/');
    }
  }

}
