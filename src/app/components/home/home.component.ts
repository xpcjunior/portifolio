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
  langEn: Boolean = true

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
    } else {
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
