import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api/api.service';

type DataType = {
  field: string,
  value:any  
}

@Component({
  selector: 'app-inner-set-data',
  imports: [CommonModule],
  templateUrl: './inner-set-data.component.html',
  styleUrl: './inner-set-data.component.css'
})
export class InnerSetDataComponent {
  @Input() data:any;
  @Input() rawData:any;
  
  textControl = new FormControl();
  private savedSelection: Range | null = null;
  label = ''
  isUnsaved = false;
  isArray=false;
  
  constructor(public api: ApiService){
    if(this.data){
      this.textControl.setValue(this.data.value)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log(changes['data'])
      this.label=changes['data'].currentValue.field;
      this.isArray=Array.isArray(this.data.value)
      // if(this.isArray){
      //   this.textControl.setValue(changes['data'].currentValue.value[currentI]);
      // }else{
      this.textControl.setValue(changes['data'].currentValue.value);
      // }
      console.log(this.data.value,Array.isArray(this.data.value))
    }
  }

add(){
  //this.data.value.push('')
}

  saveCursorPosition(event: KeyboardEvent,i=0) {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      this.savedSelection = selection.getRangeAt(0);
    }
  }

  saveValue(i=0){
    console.log('saveValue, rawData',this.rawData)
    //this.rawData.file.fileName;
    console.log('save value - todo')
    this.isUnsaved = false;
    const dataToSend={...this.rawData};
    console.log('rawData',this.rawData)
    if(this.isArray){
      dataToSend[this.data.field[i]]=this.textControl.value[i]
    }else{
      dataToSend[this.data.field]=this.textControl.value
    }
    console.log('datato send',dataToSend)
    this.api.createSet(
      this.rawData.setName,
      this.rawData.fileName,
      dataToSend,
      'updateExistinngSingularFile'
    )
  }
  
  updateValue(event: Event,i=0) {
    this.isUnsaved = true;
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

}
