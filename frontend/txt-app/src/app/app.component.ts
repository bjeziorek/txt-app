import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTablesComponent } from "./metadata-tables/metadata-tables.component";
import { MenuComponent } from './menu/menu.component';
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { ScenesComponent } from "./scenes/scenes.component";
import { CharactersComponent } from "./characters/characters.component";
import { SceneComponent } from "./scene/scene.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTablesComponent, MenuComponent, MainMenuComponent, ScenesComponent, CharactersComponent, SceneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Krystalik'
}
