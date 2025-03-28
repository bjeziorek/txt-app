import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
 
  private translations = new BehaviorSubject<Record<string, string>>({});
  translations$ = this.translations.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations('pl');
  }

  //   loadTranslations(lang: string) {
  //     console.log('---- in loadtranst')
  // //    const url = `./assets/translations/${lang}.properties`;
  //   const url = `translations/${lang}.properties`;
  //   this.http.get(url, { responseType: 'text' }).subscribe((data) => {
  //     this.translations = this.parseProperties(data);
  //     console.log('---',this.translations)
  //   });
  // }
  loadTranslations(lang: string): void {
    const url = `translations/${lang}.properties`;
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (data) => {
        const parsed = this.parseProperties(data);
        this.translations.next(parsed); // Aktualizuj dane w BehaviorSubject
      },
      error: (err) => {
        console.error(`Error loading translations for ${lang}:`, err);
      },
    });
  }

  translate(key: string): string {
    const currentTranslations = this.translations.getValue(); // Pobierz aktualne tłumaczenia
    return currentTranslations[key] || key; // Zwróć tłumaczenie lub klucz jako fallback
  }

  private parseProperties(data: string): Record<string, string> {
    const lines = data.split('\n');
    const result: Record<string, string> = {};
    lines.forEach((line) => {
      const [key, value] = line.split('=');
      if (key && value) {
        result[key.trim()] = value.trim();
      }
    });
    return result;
  }

  // loadTranslations(lang: string): void {
  //   const url = `translations/${lang}.properties`;
  //   this.http.get(url, { responseType: 'text' }).subscribe({
  //     next: (data) => {
  //       console.log('raw data',data)
  //       this.translations = this.parseProperties(data);
  //       console.log('Translations updated:', this.translations);
  //     },
  //     error: (err) => {
  //       console.error('Error loading translations:', err);
  //     },
  //   });
  // }

  // translate(key: string): string {
  //   console.log('translate service',key)
  //   return this.translations[key] || key;
  // }

  // private parseProperties(data: string): Record<string, string> {
  //   const lines = data.split('\n');
  //   const result: Record<string, string> = {};
  //   lines.forEach((line) => {
  //     const [key, value] = line.split('=');
  //     if (key && value) {
  //       result[key.trim()] = value.trim();
  //     }
  //   });
  //   return result;
  // }
}
