import { Component } from '@angular/core';

@Component({
  selector: 'app-main-text',
  imports: [],
  templateUrl: './main-text.component.html',
  styleUrl: './main-text.component.css'
})
export class MainTextComponent {
  // here I'm going to display 1 scene.
  // By default it will be 1st scene in file.
  // In future I'm going to add mechnism to save
  // place where user was last time and what scenes had opened
  // In case when it was more than 5 scenes (configurable amount)
  // System will ask user that last time he had opened X scenes
  // and does he want to continue and open all of them or start with 
  // 1st?

  // Anyway here I can get by @Input (or maybe some kind of Service?)
  // data of only one scene
  // If there is more scenes opened, ScenesComponent will iterate by it.
  // I guess that using service will be more flexible here.
  // Because as I know myself I'm going to mess over and over with 
  // the structure so it's going to change often and moving @Inputs
  // each time will quickly make me sick and tired...
}
