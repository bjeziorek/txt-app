import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TranslatePipe } from "../translation-utils/translate.pipe";
import { flattenObject } from '../utils/utils';
import { FormControl } from '@angular/forms';
import { InnerSetDataComponent } from "../inner-set-data/inner-set-data.component";

@Component({
  selector: 'app-set-data',
  imports: [TranslatePipe, CommonModule, InnerSetDataComponent],
  templateUrl: './set-data.component.html',
  styleUrl: './set-data.component.css',
})
export class SetDataComponent {
  data: any;
  data1: any;
  rawData: any;
  currentSet='text';
  index: any;
  setData: any;

constructor(public api: ApiService){
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
  this.api.openSetData$.subscribe((response: any) => {
    console.log('openset:',response)
    this.rawData = response;
    if(this.rawData){
      this.setData=flattenObject(this.rawData.file);
    }
  });
}

openSetFile(setFileName: string,setName:string) {
  console.log('openSet:',setName,setFileName)
  this.api.openSet(setName,setFileName,true)
  
  }

  public createNewSet(){
    this.api.createSet(this.currentSet,'',{},'createNewSingularFile')
  }

  public getSet = (set: string)=>{
    console.log('in btn getset',set)
    this.currentSet=set;
    this.data1=this.api.openSet(set,'',true);
  }

 
public flattenObject = flattenObject

}
