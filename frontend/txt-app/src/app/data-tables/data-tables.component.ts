import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

type Schema = any;

@Component({
  selector: 'app-data-tables',
  imports: [],
  templateUrl: './data-tables.component.html',
  styleUrl: './data-tables.component.css'
})  
export class DataTablesComponent {
  data$ = Observable<any>;

  constructor(private api: ApiService) { }



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   // this.data$=this.api.getData;
   this.api.getData().subscribe(
    (response:Schema) => {
      console.log(response);
    }
  );
  }
}
