import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Component, Input } from '@angular/core';
import { ApiService } from '../api/api.service';
import { TranslatePipe } from "../translation-utils/translate.pipe";
import { flattenObject } from '../utils/utils';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-set-data',
  imports: [TranslatePipe,CommonModule],
  templateUrl: './set-data.component.html',
  styleUrl: './set-data.component.css',
})
export class SetDataComponent {
  data: any;
  data1: any;
  data2: any;
  currentSet='text';
  index: any;
  setData: any;

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
  this.api.openSetData$.subscribe((response: any) => {
    this.data2 = response;
    // console.log('res in data2',this.data2)
    // this.index=flattenObject(response.index);
    if(this.data2){
      this.setData=flattenObject(this.data2.file);
    }
    
  });
}

textControl = new FormControl('');
private savedSelection: Range | null = null;

saveCursorPosition(event: KeyboardEvent) {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    this.savedSelection = selection.getRangeAt(0);
  }
}

updateValue(event: Event) {
  const element = event.target as HTMLElement;
  this.textControl.setValue(element.innerHTML);

  const selection = window.getSelection();

  if (selection && selection.rangeCount > 0) {
      const lastKey = event as InputEvent;

      if (lastKey.data && lastKey.data.match(/[^\p{C}]/u)) {
          // Zamiast ręcznego manipulowania offsetem, przesuwamy kursor naturalnie
          document.execCommand('forwardDelete'); // Usunięcie domyślnych nadpisywań
          selection.modify('move', 'right', 'character'); // Przesunięcie o 1 znak
      }
  }

// alternatywa dla execCommand:
// const selection = window.getSelection();
// if (selection && selection.rangeCount > 0) {
//     const range = selection.getRangeAt(0);
//     range.deleteContents(); // Usunięcie starego tekstu
//     const textNode = document.createTextNode(lastKey.data || '');
//     range.insertNode(textNode); // Wstawienie nowego znaku
//     range.setStartAfter(textNode); // Przesunięcie kursora
//     range.setEndAfter(textNode);
//     selection.removeAllRanges();
//     selection.addRange(range);
// }

}

  public createNewSet(){
    this.api.createSet(this.currentSet,'',{},'createNewSingularFile')
  }

  public getSet = (set: string)=>{
    this.currentSet=set;
    this.data1=this.api.openSet(set,'',true);
  }

 
public flattenObject = flattenObject

}
