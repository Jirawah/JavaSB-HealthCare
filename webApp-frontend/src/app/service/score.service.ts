import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ScoreResponse {
  patientFullName: string;
  age: number;
  triggerCount: number;
  riskLevel: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private apiUrl = 'http://localhost:8084/score';

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getScore(patientId: number): Observable<ScoreResponse> {
    return this.http.get<ScoreResponse>(`${this.apiUrl}/${patientId}`, {
      headers: this.getAuthHeaders()
    });
  }
}
