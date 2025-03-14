import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'
import { sceny } from '../data';
import { Schema } from '../txt.model';

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
 

  constructor(private api: ApiService) { }



  ngOnInit(): void {
   this.api.getData().subscribe(
    (response:Schema) => {
      console.log(response);
    }    
  );
  }
}
