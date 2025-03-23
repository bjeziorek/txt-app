import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'
import { sceny } from '../data';
import { Schema } from '../txt.model';
import { FormsModule } from '@angular/forms';

enum FilterModes {
  Suma = "Suma",
  Mnożenie = "Mnożenie",
}

@Component({
  selector: 'app-data-tables',
  imports: [CommonModule, FormsModule],
  templateUrl: './data-tables.component.html',
  styleUrl: './data-tables.component.css'
})  
export class DataTablesComponent {

onFilterModeChange() {
  this.filterScenesByCharacter('')
}
  public characters:string[]=[];
  public filters:{character:string;filter:boolean}[]=[];
  public filterMode:FilterModes=FilterModes.Suma

  data$ = Observable<any>;
scenes = sceny.sort((a, b) => {
  if (a.date.year !== b.date.year) return a.date.year - b.date.year;
  if (a.date.month !== b.date.month) return a.date.month - b.date.month;
  if (a.date.day !== b.date.day) return a.date.day - b.date.day;
  if (a.date.hour !== b.date.hour) return a.date.hour - b.date.hour;
  return 0;
});

isFilterOnForChar(name:string){
  const z=this.filters.filter(filter=>filter.character && filter.filter).map(el=>el.character).includes(name)
  return z
}

filterScenesByCharacter(character: string){
  this.filters = this.filters.map(
    filter=>{
      if( filter.character==character){
        return {character, filter:!filter.filter}
      }else{
        return filter
      }
    })

  const filtersOn = this.filters.filter(filter=>filter.filter).map(el=>el.character)
  this.polaczTablice(  sceny.filter(scene => 
    filtersOn.some(filter => 
      scene.characters.some(character => character.name === filter)
    )
  ))


  if(character==='ALL'){
    this.scenes=sceny;
    this.filters = this.filters.map(filter=>{
      return {
        character:filter.character,
        filter:false
      }
  });
    return;
  }

  const sceneList: any[] = []

  filtersOn.forEach(filter=>{
    sceneList.push(
      sceny.filter(scene => scene.characters.filter(char=>char.name===filter).length>0)
    )
  })


  switch(this.filterMode){
    case FilterModes.Suma:
    this.scenes=sceny.filter(scene => scene.characters.filter(char=>char.name===character).length>0)
    this.scenes=sceneList.flat();
    break;
    case FilterModes.Mnożenie:
      this.scenes=sceny.filter(scene => 
        filtersOn.every(filter=>scene.characters.some(char=>char.name===filter)))
    break;
    default:
      console.error('nieznany filter mode:', this.filterMode)
  }
}

public showhide = true;

 toggle(){
  this.showhide=!this.showhide;
 }

 polaczTablice(...tablice: Schema[][]): Schema[] {
  return [
    ...new Map(
      tablice
        .flat()
        .map((obiekt) => [`${obiekt.nr}_${obiekt.pov}`, obiekt])
    ).values()
  ];
};

  testSendScene(item:Schema){
    this.api.updateSceneById(item)
  }

  get headers() {
    return Object.keys(sceny[0]);
  }

  trackByFn(index: number, item: Schema): number {
    return item.nr;
  }
 
  generateCharacterEnum(data: Schema[]){
  
    const uniqueNames = Array.from(
      new Set(
        data.flatMap(item => item.characters.map(character => character.name))
      )
    );
  
  console.log(uniqueNames);
  return uniqueNames;
  }

  generateCharacterFilters(){
    this.filters = this.characters.map(char=>({
      character: char,
      filter: false
    }))
  }

  constructor(private api: ApiService) { 
    this.characters=this.generateCharacterEnum(sceny);
    this.generateCharacterFilters();
  }


  ngOnInit(): void {
   this.api.getData().subscribe(
    (response:Schema) => {
      console.log(response);
    }    
  );
  }
}
