import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'
import { sceny } from '../data';
import { Schema } from '../txt.model';
import { FormsModule } from '@angular/forms';

enum FilterModes {
  AnyPresent = "AnyPresent",
  AllPresent = "AllPresent",
}

@Component({
  selector: 'metadata-tables',
  imports: [CommonModule, FormsModule],
  templateUrl: './metadata-tables.component.html',
  styleUrl: './metadata-tables.component.css'
})  
export class DataTablesComponent {

headers=Object.keys(sceny[0]);


checkColumnVisibility(colName:string) {
  return this.columns.find(col=>col.col===colName)?.isVisible
//throw new Error('Method not implemented.');
}

  data$ = Observable<any>;
  scenes = sceny.sort((a, b) => {
    if (a.date.year !== b.date.year) return a.date.year - b.date.year;
    if (a.date.month !== b.date.month) return a.date.month - b.date.month;
    if (a.date.day !== b.date.day) return a.date.day - b.date.day;
    if (a.date.hour !== b.date.hour) return a.date.hour - b.date.hour;
    return 0;
  });

  extractColumns(){
    // todo - rewrite it to self generating
    return [
      {col:"nr", isVisible: true},
      {col:"sceneIntensity", isVisible: true},
      {col:"idMalformation", isVisible: true},
      {col:"descTitle", isVisible: true},
      {col:"shortDesc", isVisible: true},
      {col:"date", isVisible: true},
      {col:"characters", isVisible: true},
      {col:"pov", isVisible: true},
      {col:"place", isVisible: true},
      {col:"didascalia", isVisible: true},
      {col:"remarks", isVisible: true},
    ]
  }

  extractAllCharactersFromScenes(){
    return this.filters.map(filter=>{
      return {
        character:filter.character,
        filter:false
      }
  });
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
    // this.polaczTablice(  sceny.filter(scene => 
    //   filtersOn.some(filter => 
    //     scene.characters.some(character => character.name === filter)
    //   )
    // ))
  
  
    if(character==='ALL'){
      this.scenes=sceny;
      this.filters = this.extractAllCharactersFromScenes();
      return;
    }
  
    const sceneList: any[] = []
  
    filtersOn.forEach(filter=>{
      sceneList.push(
        sceny.filter(scene => scene.characters.filter(char=>char.name===filter).length>0)
      )
    })
  
  
    switch(this.filterMode){
      case FilterModes.AnyPresent:
      this.scenes=sceny.filter(scene => scene.characters.filter(char=>char.name===character).length>0)
      this.scenes=sceneList.flat();
      break;
      case FilterModes.AllPresent:
        this.scenes=sceny.filter(scene => 
          filtersOn.every(filter=>scene.characters.some(char=>char.name===filter)))
      break;
      default:
        console.error('nieznany filter mode:', this.filterMode)
    }
  }

onFilterModeChange() {
  this.filterScenesByCharacter('')
}
  public characters:string[]=[];
  public filters:{character:string;filter:boolean}[]=[];
  public columns:{col:string;isVisible:boolean}[]=this.extractColumns();
  public filterMode:FilterModes=FilterModes.AnyPresent

setIsColumnActive(colName:string) {
  this.columns = this.columns.map(column=>{
    if(colName===column.col){
      return {col:column.col,isVisible:!column.isVisible}
    }else{
      return column
    }
  })
}

 

isFilterOnForChar(name:string){
  return this.filters.filter(filter=>filter.character && filter.filter).map(el=>el.character).includes(name)
}





filterColumns(){
  // todo
  
}



public showhide = true;

 toggle(){
  this.showhide=!this.showhide;
 }

  testSendScene(item:Schema){
    // this.api.updateSceneById(item)
    this.api.sendTestData(item)
    
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
    console.log('headers:',this.headers)
  }


  ngOnInit(): void {
   this.api.getData().subscribe(
    (response:Schema) => {
      console.log(response);
    }    
  );
  }
}
