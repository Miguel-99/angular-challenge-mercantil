import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBrand } from 'src/app/models/IBrand';
import { IModel } from 'src/app/models/IModel';
import { IVersion } from 'src/app/models/IVersion';
import { CoverageService } from 'src/app/services/coverage/coverage.service';
import { VehicleService } from 'src/app/services/vehicle/vehicle.service';

@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css']
})
export class VehicleDataComponent implements OnInit {

  @Output() itemEvent = new EventEmitter<FormGroup>();

  myForm: FormGroup;
  brands: IBrand[];
  models: String[];
  versions: IVersion[];
  years: String[];

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService
  ) {
    this.myForm = this.fb.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      anio: ['', [Validators.required]],
      version: ['', []]
    });
  }

  ngOnInit(): void {
    this.loadBrands();
    this.loadLast20Years();

  }

  loadBrands(): void {
    this.vehicleService.getBrands().subscribe(
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
    this.vehicleService.getModels(
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
    this.vehicleService.getVersions(
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
  
  sendEvent(value: FormGroup) {
    this.itemEvent.emit(value);
  }
}
