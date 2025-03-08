import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTablesComponent } from "./data-tables/data-tables.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataTablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'txt-app';
}
