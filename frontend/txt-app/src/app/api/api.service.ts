import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Schema } from '../txt.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/data';
  private apiUrlUpdateSceneById = 'http://localhost:3000/data/scene/id-pov';
  private test = 'http://localhost:3000/test';

  private openProjectDataSubject = new BehaviorSubject<any>(null); // Inicjalizacja z wartością null
  private openSetDataSubject = new BehaviorSubject<any>(null); // Inicjalizacja z wartością null
  public openProjectData$ = this.openProjectDataSubject.asObservable(); // Eksponowanie jako Observable
  public openSetData$ = this.openSetDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  currentProject = '';

  openSet(set:string,fileName:string,includeIndex:boolean) {
    console.log('========',set,'0001.json',includeIndex)
     const data ={projectName:this.currentProject,set,fileName,includeIndex};
     this.http.post('http://localhost:3000/data/set/open',
       data)
       .subscribe(
       response => {
        this.openProjectDataSubject.next(response)
         console.log('Response from server:', response, ' i tu muszę gdzieś wczytać te dane dla setu...');
       },
       error => {
         console.error('Error:', error);
       }
     );
   }

  openProject(projectName:string) {
    this.currentProject=projectName
    const dataProject={name:projectName}
     console.log('zostanie wysłane:', dataProject)
     const data = dataProject ;
     this.http.post('http://localhost:3000/data/project/open',
       data)
       .subscribe(
       response => {
        this.openProjectDataSubject.next(response)
         console.log('Response from server:', response, ' i tu muszę gdzieś wczytać te dane...');
       },
       error => {
         console.error('Error:', error);
       }
     );
   }

  createProject(projectName:string,template:string):void {
    const dataProject={name:projectName,template}
     console.log('zostanie wysłane: ',dataProject)
     const data = dataProject ;
     this.http.post('http://localhost:3000/data/project/create',
       data)
       
       // z jakiegoś niepojętego powodu musi być ten subscribe, inaczej backend nie robi create jak to jest zakomentowane, a jak jest odkomentowane to robi
       .subscribe(
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
       data)
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
