import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGeoRefApiMunicipalitiesResponse } from 'src/app/models/IGeoRefApiMunicipalitiesResponse';
import { IGeoRefApiProvincesResponse } from 'src/app/models/IGeoRefApiProvincesResponse';
import { IMunicipality } from 'src/app/models/IMunicipality';
import { IProvince } from 'src/app/models/IProvince';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoRefArService {

  url: string = environment.baseApiGeoRefUrl;

  constructor(
    private http: HttpClient
  ) { }

  getProvinces(): Observable<IGeoRefApiProvincesResponse>{
    return this.http.get<IGeoRefApiProvincesResponse>(`${this.url}/provincias`);

  }

  getCities(idProvincia: string): Observable<IGeoRefApiMunicipalitiesResponse>{

    let res = this.http.get<IGeoRefApiMunicipalitiesResponse>(`${this.url}/municipios?provincia=${idProvincia}&campos=id,nombre&max=135`);
    
    return res;
  }


}
