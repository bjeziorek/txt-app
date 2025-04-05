import { ApiService } from './../api/api.service';
import { Component } from '@angular/core';
import { TranslatePipe } from "../translation-utils/translate.pipe";
import { TranslationService } from '../translation-utils/translation.service';

@Component({
  selector: 'menu',
  imports: [TranslatePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
createNewProject() {
  this.apiService.createProject777()
 
}
  constructor(private translationService: TranslationService, private apiService: ApiService) {}

  setLang(lang: string): void {
    console.log('---in setlang')
    this.translationService.loadTranslations(lang);
  }


// wczytać do projects listę plików z enpointa
// program chyba musiałby sobie ją gdzieś zapisywać w jakichś swoich wewntrznych tempach, ja to jest robione?

projects: any;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  // TODO 
  // wczytać do projects listę plików z enpointa
  // program chyba musiałby sobie ją gdzieś zapisywać w jakichś swoich wewntrznych tempach, ja to jest robione?

  
}

}
