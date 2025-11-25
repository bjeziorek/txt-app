import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rawData } from './rawData';

type ElementType = {
  element: string,
  isActive: boolean
}

@Component({
  selector: 'app-scenes-order',
  imports: [CommonModule],
  templateUrl: './scenes-order.component.html',
  styleUrl: './scenes-order.component.css'
})
export class ScenesOrderComponent {



isFalseShown=true;

 hoveredIndex: number | null = null;

data=rawData.map((el:string)=>{
  const element: ElementType ={
    element:el,
    isActive:true,
  }

  return element;
})

add(i:string){
  const saniI=!isNaN(Number(i))?+i:0
  const newElement: ElementType = {
    element:'===== TODO ====',
    isActive:true,
  }
  this.data.splice(saniI, 0, newElement);
}

changeIndex(sceneIndex:string,record:ElementType,i:number){
  const saniI=!isNaN(Number(i))?+i:0
 const sani2=!isNaN(Number(sceneIndex))?+sceneIndex:0

  const element = this.data.splice(saniI, 1)[0]; 
  this.data.splice(sani2, 0, element);            

}

changeSceneName(name:string,i:number){
  this.data[i].element=name
}

up(i:number){
  if(i>0){
  const temp = this.data[i-1]
  this.data[i-1]=this.data[i]
  this.data[i]=temp
  }
}

down(i:number){
  if(i<this.data.length-1){
  const temp = this.data[i+1]
  this.data[i+1]=this.data[i]
  this.data[i]=temp
  }
}

activity(i:number){
  this.data[i].isActive=!this.data[i].isActive
}

toggle_false(){
  this.isFalseShown=!this.isFalseShown
}

}
