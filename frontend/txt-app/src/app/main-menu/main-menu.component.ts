import { TranslationService } from '../translation-utils/translation.service';
import { Component } from '@angular/core';
import { TranslatePipe } from "../translation-utils/translate.pipe";
import { SceneComponent } from "../scene/scene.component";
import { DataTablesComponent } from "../metadata-tables/metadata-tables.component";

// TODO this should come fron backend
enum Tabs  {
  'text'='text',
  'characters'='characters',
  'events'='events',
  'scenes'='scenes',
  'ideas'='ideas',
}


@Component({
  selector: 'app-main-menu',
  imports: [TranslatePipe, SceneComponent, DataTablesComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  constructor(translationService:TranslationService){
    translationService.loadTranslations();
  }
  currentTab=Tabs.text;
  setTab(tab:string){
    this.currentTab=tab as Tabs;
  }
}
