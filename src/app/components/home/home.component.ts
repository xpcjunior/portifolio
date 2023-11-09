import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private translate: TranslateService) {
  }

  getTranslated(chave: string) {
    return this.translate.instant(chave);
  }

}
