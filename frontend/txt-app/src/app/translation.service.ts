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
    const currentTranslations = this.translations.getValue(); 
    return currentTranslations[key] || key; 
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
}
