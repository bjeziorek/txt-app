import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  
  constructor(){
    if(this.data){
      this.textControl.setValue(this.data.value)
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      console.log(changes['data'])
      this.label=changes['data'].currentValue.field;
      this.textControl.setValue(changes['data'].currentValue.value);
    }
  }

  saveCursorPosition(event: KeyboardEvent) {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      this.savedSelection = selection.getRangeAt(0);
    }
  }

  saveValue(){
    this.isUnsaved = false;
    const dataToSend={...this.rawData};
    console.log('rawData',this.rawData)
    dataToSend[this.data.field]=this.textControl.value
    console.log('datato send',dataToSend)
  }
  
  updateValue(event: Event) {
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
