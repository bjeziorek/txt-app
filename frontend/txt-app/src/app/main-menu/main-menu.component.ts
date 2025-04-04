import { TranslationService } from './../translation.service';
import { Component } from '@angular/core';
import { TranslatePipe } from "../translate.pipe";
import { SceneComponent } from "../scene/scene.component";
import { DataTablesComponent } from "../metadata-tables/metadata-tables.component";


enum Tabs  {
  'text'='text',
  'characters'='characters',
  'events'='events',
  'scenes'='scenes',
}


@Component({
  selector: 'app-main-menu',
  imports: [TranslatePipe, SceneComponent, DataTablesComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  constructor(translationService:TranslationService){}
  currentTab=Tabs.text;
  setTab(tab:string){
    this.currentTab=tab as Tabs;
  }
}
