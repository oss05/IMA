import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { GLOBAL } from 'src/global';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getArchives() {
    return this.http.get<any>(this.url + 'archives').pipe();
  }

  getLegal() {
    return this.http.get<any>(this.url + 'archives/legal').pipe();
  }

  getRegulations() {
    return this.http.get<any>(this.url + 'archives/regulations').pipe();
  }

  getPublications() {
    return this.http.get<any>(this.url + 'archives/publications').pipe();
  }

  getPositions() {
    return this.http.get<any>(this.url + 'archives/positions').pipe();
  }

  searchPosts(search: string) {
    return this.http.get<any>(this.url + 'archives/search/' + search, httpOptions).pipe();
  }
}