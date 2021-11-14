import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrand } from 'src/app/models/IBrand';
import { ICoverage } from 'src/app/models/ICoverage';
import { IModel } from 'src/app/models/IModel';
import { IVersion } from 'src/app/models/IVersion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  private apiUrl = environment.baseApiUrl + "/vehiculos";;

  constructor(private http: HttpClient) { }

  getCoverages(): Observable<ICoverage[]> {
    return this.http.get<ICoverage[]>(`${environment.baseMockApiUrl}/coberturas`);
  }
}
