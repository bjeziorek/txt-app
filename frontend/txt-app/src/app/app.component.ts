import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTablesComponent } from "./metadata-tables/metadata-tables.component";
import { MenuComponent } from './menu/menu.component';
import { SetMenuComponent } from "./set-menu/set-menu.component";
import { ScenesComponent } from "./scenes/scenes.component";
import { CharactersComponent } from "./characters/characters.component";
import { SceneComponent } from "./scene/scene.component";
import { SetDataComponent } from "./set-data/set-data.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, SetMenuComponent, SetDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Krystalik'
}
