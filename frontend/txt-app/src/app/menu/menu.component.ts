import { ApiService } from './../api/api.service';
import { Component } from '@angular/core';
import { TranslatePipe } from "../translation-utils/translate.pipe";

import { FormsModule } from '@angular/forms';

import { TranslationService } from '../translation-utils/translation.service';

@Component({
  selector: 'menu',
  imports: [TranslatePipe, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  mode = '';
  
 projectName: string = '';
 projectTemplate: string = '';


 openMenu(mode:string) {
  this.mode=mode;
 }

 openOpenProject() {
  this.mode="open_project";
 }

 onSubmitNewProject(form: any) {
   if (form.valid) {
     console.log('New: Wysłano nazwę projektu:', this.projectName);
     const res= this.apiService.createProject(this.projectName,this.projectTemplate)

   
      console.log('res',res)
   
     
   }
 }

 onSubmitOpenProject(form: any) {
   if (form.valid) {
     console.log('Otwórz: Wysłano nazwę projektu:', this.projectName);
     this.apiService.openProject(this.projectName)
   }
 }

 

  constructor(private translationService: TranslationService, private apiService: ApiService) {}

  setLang(lang: string): void {
    console.log('---in setlang')
    this.translationService.loadTranslations(lang);
  }


// wczytać do projects listę plików z enpointa
// program chyba musiałby sobie ją gdzieś zapisywać w jakichś swoich wewntrznych tempach, jak to jest robione?

// projects: any;

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  // TODO 
  // wczytać do projects listę plików z enpointa
  // program chyba musiałby sobie ją gdzieś zapisywać w jakichś swoich wewntrznych tempach, ja to jest robione?

  
}

}
 