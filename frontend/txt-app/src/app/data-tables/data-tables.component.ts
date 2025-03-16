import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'
import { sceny } from '../data';
import { Schema } from '../txt.model';

enum MyEnum {
  A = "A",
  B = "B",
  C = "C"
}

@Component({
  selector: 'app-data-tables',
  imports: [CommonModule],
  templateUrl: './data-tables.component.html',
  styleUrl: './data-tables.component.css'
})  
export class DataTablesComponent {
  public characters:string[]=[];
  example: MyEnum = MyEnum.A;

  data$ = Observable<any>;
scenes = sceny.sort((a, b) => {
  if (a.date.year !== b.date.year) return a.date.year - b.date.year;
  if (a.date.month !== b.date.month) return a.date.month - b.date.month;
  if (a.date.day !== b.date.day) return a.date.day - b.date.day;
  if (a.date.hour !== b.date.hour) return a.date.hour - b.date.hour;
  return 0;
});

filterScenesByCharacter(character: string){
  if(character===''){
    this.scenes=sceny;
    return;
  }
  console.log(this.scenes.length, this.scenes)
  this.scenes=sceny.filter(scene => scene.characters.filter(char=>char.name===character).length>0)
  console.log(this.scenes.length, this.scenes)
}

public showhide = true;

 toggle(){
  this.showhide=!this.showhide;

  this.example = MyEnum.B

 }

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

  constructor(private api: ApiService) { 
    this.characters=this.generateCharacterEnum(sceny);

  }


  ngOnInit(): void {
   this.api.getData().subscribe(
    (response:Schema) => {
      console.log(response);
    }    
  );
  }
}
