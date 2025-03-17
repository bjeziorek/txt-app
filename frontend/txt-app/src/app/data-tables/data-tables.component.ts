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
//throw new Error('Method not implemented.');
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
 // console.log('zzzzzzzzzzz',z)
  return z
  //.includes[name]
}

filterScenesByCharacter(character: string){
  this.isFilterOnForChar("Fei")
  //console.log('-------------1',this.filters)
  this.filters = this.filters.map(
    filter=>{
   //   console.log(' filter.character==character', character, filter.character==character, filter)
      if( filter.character==character){
       
        return {character, filter:!filter.filter}
      }else{
        return filter
      }
      // filter.character==character? ({character, filter:!filter}):filter
      // return 
    })
  //console.log('-------------2', this.filters)

  const filtersOn = this.filters.filter(filter=>filter.filter).map(el=>el.character)
  this.polaczTablice(  sceny.filter(scene => 
    filtersOn.some(filter => 
      scene.characters.some(character => character.name === filter)
    )
  ))
//  console.log('-------------3', filtersOn)
  // dotąd działa, a dalej jest jakies bezowisko... musze zebrac sceny

  // tu coś ten filtr nie działa
//[[filter is on to np 'tian', ;fei

  // switch(this.filterMode){
  //   case FilterModes.Suma:
  //   console.log('in suma') 
  //   this.scenes=sceny.filter(scene => {
  //       console.log('............scena:',scene)
  //       return filtersOn.map(filter=>{
  //         console.log('...............filter',filter)
  //         return scene.characters.some(char=>{
  //           if( filter===char.name) console.log('............',char, filter, char.name, filter===char.name)
  //           return filter==char.name
  //         })
  //       })
  //     })
  //   break;
  //   case FilterModes.Mnożenie:
  //     console.log('in mnożenie') 
  //     // this.scenes=sceny.filter(scene => {
  //     //   return filtersOn.map(filter=>{
  //     //     return scene.characters.some(char=>filter==char.name)
  //     //   })
  //     // }).filter(scene=>{
  //     //   filtersOn.every(filter=>{
  //     //     scene.characters.map(ch=>ch.name).includes(filter);
  //     //   })
  //     // })
  //   break;
  //   default:
  //     console.error('nieznany filter mode:', this.filterMode)
  // }
 


  


  
  //console.log('filtersOn',filtersOn, "filters",this.filters, 'scenes',this.scenes)
  // if(this.filters.find(filter=>filter.character==character && !filter.filter)) return

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
  //console.log(this.scenes.length, this.scenes)
  //this.scenes=sceny.filter(scene => scene.characters.filter(char=>char.name===character).length>0)
  //this.polaczTablice(this.scenes, sceny.filter(scene => scene.characters.filter(char=>char.name===character).length>0))

  const sceneList: any[] = []

  filtersOn.forEach(filter=>{
    sceneList.push(
      sceny.filter(scene => scene.characters.filter(char=>char.name===filter).length>0)
    )
  })


  switch(this.filterMode){
    case FilterModes.Suma:
    console.log('in suma') 
    this.scenes=sceny.filter(scene => scene.characters.filter(char=>char.name===character).length>0)
    this.scenes=sceneList.flat();
    console.log('suma',this.scenes)
    break;
    case FilterModes.Mnożenie:
      console.log('in mnożenie') 
      this.scenes=sceny.filter(scene => 
        // tylko taka scena ktora zawiera wszystkie postacie z listy
        filtersOn.every(filter=>scene.characters.some(char=>char.name===filter)))
//        scene.characters.every(char=>filtersOn.includes))
     // this.scenes=sceneList.flat();
      console.log('mno',this.scenes)
    break;
    default:
      console.error('nieznany filter mode:', this.filterMode)
  }

  console.log(this.scenes.length, this.scenes)
  // this.scenes=sceny.filter(scene => scene.characters.filter(char=>char.name===character).length>0)
  // this.scenes=sceneList.flat();
  

  console.log(this.scenes.length, this.scenes)
}

public showhide = true;

 toggle(){
  this.showhide=!this.showhide;
 }

 polaczTablice(...tablice: Schema[][]): Schema[] {
  return [
    ...new Map(
      tablice
        .flat() // Spłaszczenie wszystkich tablic w jedną
        .map((obiekt) => [`${obiekt.nr}_${obiekt.pov}`, obiekt])
    ).values()
  ];
};

  testSendScene(item:Schema){
    console.log('testSendScene:item',item)
    this.api.updateSceneById(item)
  }

  get headers() {
    return Object.keys(sceny[0]);
  }

  trackByFn(index: number, item: Schema): number {
    return item.nr;
  }
 
  generateCharacterEnum(data: Schema[]){
    // const uniqueNames = Array.from(new Set(data.map(item => item.characters.name)));
  
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
    console.log("filters",this.filters)
  }


  ngOnInit(): void {
   this.api.getData().subscribe(
    (response:Schema) => {
      console.log(response);
    }    
  );
  }
}
