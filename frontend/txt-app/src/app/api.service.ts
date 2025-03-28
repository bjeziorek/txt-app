import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schema } from './txt.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/data';
  private apiUrlUpdateSceneById = 'http://localhost:3000/data/scene/id-pov';
  private test = 'http://localhost:3000/test';


  constructor(private http: HttpClient) {}

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
      descTitle:'atak Tisa',
      shortDesc:'Oren zaskakująco nagle zwija obóz po odjeździe Rh\'inna. Z rozmów Orena i Meril orientuje się, że ona jest Czującą, więc Oren nie jest zależny od Rh\'inna. Z rozmowy wynika, że wszystko jest załatwione, a wiadomość dostarczona. Morion domyśla się widząc, gdzie idą, że chce go wymienić, swędzi go oko. Widzi Krystalską delegację. Myśli, że K2 się obudził. Tis sterując K2-ką obezwładnia Orena i zabije Dendryjską delegację (część Dendryjczyków została ukryta i próbuje uciec), Tis podbiega do Moriona, Morion pyta czy Tis zdaje sobie sprawę co zrobił i że tego nie da się naprawić. Tis twierdzi, że da i że on naprawi.',
      date:{
        year:71,
        month:3,
        day:11,
        hour:15,
        desc:'13 rok wojny, dzień pojmania Orena'
      },
      characters:['s','d','sdsdsds'
  //{
  //       name:'Morion',
  //       presence:'present',
  //       emotions:'niepokój, zdezorientowanie',
  //       goal:'obserwowanie sytuacji, nie podpadanie Orenowi i Dendryjczykom',
  //       other:['poważne przeziębienie, ma opatrzoną Kali'],
  // },{
  //   name:'Oren',
  //   presence:'present',
  //   emotions:'skoncentrowanie, determinacja',
  //   goal:'spotkanie się z Tisem i wymiana Moriona na Szina',
  //   other:['']
  // },
  // {      name:'Meril',
  //   presence:'present',
  //   emotions:'skoncentrowanie',
  //   goal:'pomaganie w dowodzeniu Orenowi, utrzymywanie połączenia telepatycznego',
  //   other:['']
  // },
 ],
  pov:'Morion',
  place:['Obóz Orena znany Rh\'innowi i Zirenowi, potem pole niczyje'],
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
