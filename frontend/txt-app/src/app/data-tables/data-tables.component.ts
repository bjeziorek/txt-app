import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'
import { sceny } from '../data';


type Char = {
  name:string,
  emotions:string,
  goal:string,
  other:string[]
}

type DateKryst = {
  year:number,
  month:number,
  day:number,
  hour:number,
  desc:string,
  [key: string]: any;
}

export type Schema = {
  "nr": number,
  "idMalformation"? :string,
  "descTitle":string,
  "shortDesc":string,
  "date":DateKryst,
  "characters":Char[],
  "pov":string,
  "place":string[],
  "didascalia":string,
  "remarks":string,
   [key: string]: any;
};

@Component({
  selector: 'app-data-tables',
  imports: [CommonModule],
  templateUrl: './data-tables.component.html',
  styleUrl: './data-tables.component.css'
})  
export class DataTablesComponent {
  data$ = Observable<any>;
sceny = sceny.sort((a, b) => {
  if (a.date.year !== b.date.year) return a.date.year - b.date.year;
  if (a.date.month !== b.date.month) return a.date.month - b.date.month;
  if (a.date.day !== b.date.day) return a.date.day - b.date.day;
  if (a.date.hour !== b.date.hour) return a.date.hour - b.date.hour;
  return 0;
});

public showhide = true;

 toggle(){
  this.showhide=!this.showhide;
 }

  get headers() {
    return Object.keys(sceny[0]);
  }

  trackByFn(index: number, item: Schema): number {
    return item.nr;
  }
 

  constructor(private api: ApiService) { }



  ngOnInit(): void {
   this.api.getData().subscribe(
    (response:Schema) => {
      console.log(response);
    }    
  );
  }
}
