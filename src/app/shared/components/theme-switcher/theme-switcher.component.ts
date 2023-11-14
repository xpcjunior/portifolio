import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeIconsModule } from '../../modules/fa-icons.module';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeIconsModule],
  selector: 'app-theme-switcher',
  template: `
  <button type="button" (click)="mudarCorDeFundo()" [title]="'Alterar para tema'" class="btn btn-default btn-circle grow">
    <ng-template *ngIf="isLightTheme; then iconelua else iconesol"></ng-template>
  </button>
  <ng-template #iconelua>
    <fa-icon [icon]="['fas', 'moon']" class="c-secondary"></fa-icon>
  </ng-template>
  <ng-template #iconesol>
    <fa-icon [icon]="['fas', 'sun']" class="c-secondary"></fa-icon>
  </ng-template>
  `,
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {

  public isLightTheme: boolean = false;
  private classLightTheme = 'light-theme';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
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

}
