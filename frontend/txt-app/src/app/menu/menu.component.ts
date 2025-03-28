import { Component } from '@angular/core';
import { TranslatePipe } from "../translate.pipe";
import { TranslationService } from '../translation.service';

@Component({
  selector: 'menu',
  imports: [TranslatePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private translationService: TranslationService) {}

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
