import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeIconsModule } from '../../modules/fa-icons.module';
import { TranslationModule } from '../../modules/translation.module';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeIconsModule, TranslationModule],
  selector: 'app-theme-switcher',
  template: `
  <button type="button" (click)="mudarCorDeFundo()" [title]="getTranslated()" class="btn btn-default btn-circle grow">
    @if (isLightTheme) {
      <fa-icon [icon]="['fas', 'moon']" class="c-secondary"/>
    } @else {
      <fa-icon [icon]="['fas', 'sun']" class="c-secondary"/>
    }
  </button>
  `,
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {

  public isLightTheme: boolean = false;
  private classLightTheme = 'light-theme';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private transModule: TranslationModule
  ) {}

  mudarCorDeFundo() {
    this.isLightTheme = !this.isLightTheme;

    if (this.isLightTheme) {
      this.renderer.addClass(
        this.el.nativeElement.ownerDocument.body,
        this.classLightTheme
      );
    } else {
      this.renderer.removeClass(
        this.el.nativeElement.ownerDocument.body,
        this.classLightTheme
      );
    }
  }

  getTranslated() {
    if (this.isLightTheme) {
      return this.transModule.getTranslated('tema_escuro');
    }
    return this.transModule.getTranslated('tema_claro');
  }

}
