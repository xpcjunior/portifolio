import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from 'src/app/shared/components/project/project.component';
import { SwitchComponent } from 'src/app/shared/components/switch/switch.component';
import { CircleButtonComponent } from 'src/app/shared/components/circle-button/circle-button.component';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeSwitcherComponent } from 'src/app/shared/components/theme-switcher/theme-switcher.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CircleButtonComponent,
    SwitchComponent,
    ProjectComponent,
    ThemeSwitcherComponent
  ]
})
export class HomeModule { }
