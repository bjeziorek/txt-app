import { Component, Input } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TranslatePipe } from "../translation-utils/translate.pipe";

@Component({
  selector: 'app-set-data',
  imports: [TranslatePipe],
  templateUrl: './set-data.component.html',
  styleUrl: './set-data.component.css'
})
export class SetDataComponent {
  data: any;

  currentSet='text';

constructor(private api: ApiService){
  console.log('data z inout set-data',this.data)
}

ngOnInit() {
  // tu przy wczytaniu setu (a nie projektu) mam błąd - trzymać gdzieś projekt
  // albo go nie nadpisywać nicością, tylko zamiast w ng on init
  // to sobie to trzymać gdzieś na żądanie
  this.api.openProjectData$.subscribe((response: any) => {
    this.data = response;
    console.log('res in data menu',this.data)
  });
}

  public getSet = (set: string)=>{
    this.currentSet=set;
    this.data=this.api.openSet(set,'',true);

    //console.log('data',this.data)
  }
}
