import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http'


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  exports: [TranslateModule],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]  
})
export class TranslationModule {

  constructor(private translate: TranslateService) {
  }
  
  setupLanguage() {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }

  getTranslated(chave: string) {
    return this.translate.instant(chave);
  }

  usePtLanguage() {
    this.translate.use('pt');
  }

  useEnLanguage() {
    this.translate.use('en');
  }
  
}
