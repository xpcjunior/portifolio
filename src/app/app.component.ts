import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portifolio';

  constructor(
    private translate: TranslateService
  ) {
    translate.setDefaultLang('pt'); // Define o idioma padrão
    translate.use('pt'); // Usar o idioma padrão inicialmente
  }

}
