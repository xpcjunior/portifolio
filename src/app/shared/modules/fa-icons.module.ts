import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faCode, faEnvelope, faEye, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  exports: [FontAwesomeModule]
})
export class FontAwesomeIconsModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAngular,
      faCode,
      faCopyright,
      faEnvelope,
      faEye,
      faGithub,
      faLinkedin,
      faMoon,
      faSun,
      faWhatsapp
    );
  }

}
