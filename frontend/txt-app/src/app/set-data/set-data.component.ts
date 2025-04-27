import { Component, Input } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-set-data',
  imports: [],
  templateUrl: './set-data.component.html',
  styleUrl: './set-data.component.css'
})
export class SetDataComponent {
  data: any;

constructor(private api: ApiService){
  console.log('data z inout set-data',this.data)
}

ngOnInit() {
  this.api.openProjectData$.subscribe((response: any) => {
    this.data = response;
    console.log('res in data menu',this.data)
  });
}
}
