import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
 
  currentLanguage = 'pl';
  private translations = new BehaviorSubject<any>({});
  translations$ = this.translations.asObservable();

  constructor(private http: HttpClient, private api: ApiService) {
    this.loadTranslations(this.currentLanguage);
  }

  loadTranslations(lang=this.currentLanguage): void {
    if(lang) this.currentLanguage = lang;

   this.api.getTranslation(lang).subscribe({
    next: (data) => {
      console.log('-----data:',data)
    //  const parsed = this.parseProperties(data);
    //   console.log('-----parsed:',parsed)
      this.translations.next(data);
    },
    error: (err) => {
      console.error(`Error loading translations for ${lang}:`, err);
    },
  });
  }

  translate(key: string): string {
    
    const currentTranslations = this.translations.getValue(); 
    return currentTranslations[key] || key; 
  }
}
