import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTablesComponent } from "./metadata-tables/metadata-tables.component";
import { MenuComponent } from './menu/menu.component';
import { SetDataComponent } from "./set-data/set-data.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, SetDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Krystalik'
}
