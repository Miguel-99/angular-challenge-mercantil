import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IBrand } from 'src/app/models/IBrand';
import { IModel } from 'src/app/models/IModel';
import { IVersion } from 'src/app/models/IVersion';
import { CoverageService } from 'src/app/services/coverage/coverage.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css']
})
export class VehicleDataComponent implements OnInit {

  myForm: FormGroup;
  brands: IBrand[];
  models: String[];
  versions: IVersion[];
  years: String[];

  constructor(
    private fb: FormBuilder,
    private coverageService: CoverageService
  ) {
    this.myForm = this.fb.group({
      marca: ['', []],
      modelo: ['', []],
      anio: ['', []],
      version: ['', []]
    });
  }

  ngOnInit(): void {
    this.loadBrands();
    this.loadLast20Years();

  }

  loadBrands(): void {
    this.coverageService.getBrands().subscribe(
      (data: IBrand[]) => {
        this.brands = data;
      }
    );
  }

  loadLast20Years(): void {

    let years: String[] = [];
    let year = new Date().getFullYear();
    for (let i = 0; i < 21; i++) {
      years.push(year.toString());
      year--;
    }
    this.years = years;
  }

  loadModels(): void {
    this.coverageService.getModels(
      this.findCodeCarByCarName(this.myForm.value.marca), this.myForm.value.anio)
      .subscribe(
        (data: String[]) => {
          this.models = data;
        }
      );
  }

  findCodeCarByCarName(carName: String): number {
    return this.brands.find(brand => brand.desc === carName)?.codigo!;
  }

  loadVersions(): void {
    this.coverageService.getVersions(
      this.findCodeCarByCarName(this.myForm.value.marca)!,
      this.myForm.value.anio,
      this.myForm.value.modelo
    )
      .subscribe(
        (data: IVersion[]) => {
          this.versions = data;
        }
      );
  }
}
