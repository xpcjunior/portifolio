import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from 'src/app/core/project.service';
import { ProjectoInterface } from 'src/app/shared/models/project.interface';
import { TranslationModule } from 'src/app/shared/modules/translation.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  projetos: ProjectoInterface[] = [];
  langEn: Boolean = true;
  cvLink: string = '';

  constructor(
    private transModule: TranslationModule,
    private projetoService: ProjetoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.langEn = this.router.url.includes('en');
    if(this.langEn) {
      this.transModule.useEnLanguage();
      this.cvLink = 'https://firebasestorage.googleapis.com/v0/b/portifolio-paulo.appspot.com/o/CV%2FCV-Light-Paulo-En.pdf?alt=media&token=d38f434b-75fa-4c70-b776-3daee1616241';
    } else {
      this.cvLink = 'https://firebasestorage.googleapis.com/v0/b/portifolio-paulo.appspot.com/o/CV%2FCV-Light-Paulo-Pt-br.pdf?alt=media&token=45562d45-33cc-44c0-b3bd-8a87d3ef6477';
      this.transModule.usePtLanguage();
    }
    this.carregarProjetos();
  }

  getTranslated(chave: string) {
    return this.transModule.getTranslated(chave);
  }

  carregarProjetos(): void {
    this.projetoService.getProjetos().subscribe(
      projetos => {
        this.projetos = projetos;
      }
    );

  }

}
