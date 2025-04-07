import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schema } from '../txt.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/data';
  private apiUrlUpdateSceneById = 'http://localhost:3000/data/scene/id-pov';
  private test = 'http://localhost:3000/test';


  constructor(private http: HttpClient) {}

  openProject(projectName:string,template:string) {

    const dataProject={name:projectName}
 
     console.log('zostanie wysłane: ',dataProject)
     const data = dataProject ;
     this.http.post('http://localhost:3000/data/project/open',
       data).subscribe(
       response => {
         console.log('Response from server:', response, ' i tu muszę gdzieś wczytać te dane...');
       },
       error => {
         console.error('Error:', error);
       }
     );
   }

  createProject(projectName:string,template:string) {

    // const projectName='aegdhaseghaysfgasgakgka';
    // const template = 'novel';
    const dataProject={name:projectName,template}
 
     console.log('zostanie wysłane: ',dataProject)
     const data = dataProject ;
     this.http.post('http://localhost:3000/data/project/create',
      // this.http.post('http://localhost:3000/data/testSave',
       data).subscribe(
       response => {
         console.log('Response from server:', response);
       },
       error => {
         console.error('Error:', error);
       }
     );
   }
 
   getTranslation(lang:string) {

    const dataProject={lang}
 
     console.log('zostanie wysłane: ',dataProject)
     const data = dataProject ;
    return this.http.post('http://localhost:3000/data/translation/get',
      // this.http.post('http://localhost:3000/data/testSave',
       data)
       
    //    .subscribe(
    //    response => {
    //      console.log('-----Response from server:', response);
    //      return response
    //    },
    //    error => {
    //      console.error('-----Error:', error);
    //      return error
    //    }
    //  );

   
   }



  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateSceneById(data: Schema): Observable<any> {
    console.log('--',data,JSON.stringify(data))
    return this.http.post<Schema>(this.test, JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  }


  sendTestData(item:any) {


   const item2={
      nr:91,
      descTitle:'adada',
      shortDesc:'adada',
      date:{
        year:71,
        month:3,
        day:11,
        hour:15,
        desc:'adada'
      },
      characters:['s','d','sdsdsds'
  
 ],
  pov:'Moriadawdon',
  place:['adadwada'],
  didascalia:'?',
  remarks:'?'
}

    console.log('zostanie wysłane: ',item2)
    const data = { message: item };
    this.http.post('http://localhost:3000/api/endpoint', data).subscribe(
      response => {
        console.log('Response from server:', response);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  updateSceneById2(data: Schema): Observable<any> {
    return this.http.post<Schema>(this.apiUrlUpdateSceneById, data);
  }

  updateData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

}
