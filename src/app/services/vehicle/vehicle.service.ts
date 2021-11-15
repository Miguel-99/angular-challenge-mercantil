import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from 'src/app/models/IBrand';
import { IVersion } from 'src/app/models/IVersion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl = `${environment.baseApiUrl}/vehiculos`;

  constructor(private http: HttpClient) { }
  getBrands(): Observable<IBrand[]> {
    return this.http.get<IBrand[]>(`${this.apiUrl}/marcas`);
  }

  getModels(code: number, year: string): Observable<String[]> {
    return this.http.get<String[]>(`${this.apiUrl}/marcas/${code}/${year}`);
  }

  getVersions(code: number, year: string, model: string): Observable<IVersion[]> {
    return this.http.get<IVersion[]>(`${this.apiUrl}/marcas/${code}/${year}/${model}`);
  }
}
