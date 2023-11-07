import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private apiUrl = `${environment.apiUrl}/planets`;

  constructor(private http: HttpClient) {}

  getAllPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.apiUrl);
  }

  getPlanetByID(id: number): Observable<Planet> {
    return this.http.get<Planet>(`${this.apiUrl}/${id}`);
  }
}
