import { Component } from '@angular/core';
import { TranslationModule } from 'src/app/shared/modules/translation.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private transModule: TranslationModule) {
  }

  getTranslated(chave: string) {
    return this.transModule.getTranslated(chave);
  }

}
