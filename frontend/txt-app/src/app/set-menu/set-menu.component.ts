import { TranslationService } from '../translation-utils/translation.service';
import { Component } from '@angular/core';
import { TranslatePipe } from "../translation-utils/translate.pipe";
import { SceneComponent } from "../scene/scene.component";
import { DataTablesComponent } from "../metadata-tables/metadata-tables.component";
import { ApiService } from '../api/api.service';

// TODO this should come fron backend
enum Tabs  {
  'text'='text',
  'characters'='characters',
  'events'='events',
  'scenes'='scenes',
  'ideas'='ideas',
}


@Component({
  selector: 'app-set-menu',
  imports: [TranslatePipe, SceneComponent, DataTablesComponent],
  templateUrl: './set-menu.component.html',
  styleUrl: './set-menu.component.css'
})
export class SetMenuComponent {

  data:any;

  constructor(
    translationService:TranslationService,
    private api: ApiService
  ){
    translationService.loadTranslations();
  }

  ngOnInit() {
    this.api.openProjectData$.subscribe((response: any) => {
      this.data = response;
      console.log('res in set menu',this.data)
    });
  }

  currentTab=Tabs.text;
  setTab(tab:string){
    this.currentTab=tab as Tabs;
  }
}
