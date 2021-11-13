import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  private apiUrl = environment.baseMockApiUrl;

  constructor(private http: HttpClient) { }

  usernameExists(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/usuarios?nombre=${username}`);
  }
}
