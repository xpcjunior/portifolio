import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCode, faMoon, faPlay } from '@fortawesome/free-solid-svg-icons';



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
      faGithub,
      faLinkedin,
      faMoon,
      faPlay,
      faWhatsapp
    );
  }

}
