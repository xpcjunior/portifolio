import { Component } from '@angular/core';
import { TranslationModule } from './shared/modules/translation.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifolio';

  constructor(
    private translate: TranslationModule
  ) {
    translate.setupLanguage()
  }

}
