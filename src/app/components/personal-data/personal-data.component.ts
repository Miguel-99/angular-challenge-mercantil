import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IGeoRefApiMunicipalitiesResponse } from 'src/app/models/IGeoRefApiMunicipalitiesResponse';
import { IGeoRefApiResponse } from 'src/app/models/IGeoRefProvincesApiResponse';
import { IMunicipality } from 'src/app/models/IMunicipality';
import { IProvince } from 'src/app/models/IProvince';
import { GeoRefArService } from 'src/app/services/geo-ref-ar/geo-ref-ar.service';
import { UsernameService } from 'src/app/services/username/username.service';
import { usernameValidator } from '../shared/validations/usernameValidation';


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  myForm: FormGroup;
  provinces: IProvince[];
  municipalities: IMunicipality[];

  constructor(
    private fb: FormBuilder,
    private usernameService: UsernameService,
    private geoService: GeoRefArService
  ) {
    this.myForm = this.fb.group({
      dni: ['', [Validators.minLength(7), Validators.maxLength(8), Validators.required, Validators.pattern('[0-9]*')]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.pattern('[a-zA-Z ]+'), Validators.required]],
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.pattern('[a-zA-Z ]+'), Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      celular: ['', []],
      telefono: ['', []],
      provincia: ['', [Validators.required]],
      ciudad: ['', []],
      domicilio: ['', [Validators.required]],
      usuario: ['', { validators: [Validators.required, Validators.minLength(3), Validators.maxLength(30)], asyncValidators: [usernameValidator.username(this.usernameService)], updateOn: 'blur' }],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(8), Validators.maxLength(15)
      ]],
    });
  }


  ngOnInit(): void {
    console.log(this.myForm);
    this.loadProvinces();
    this.ciudad?.disable();
    setTimeout(() => {
      console.log(this.provinces, this.municipalities), 1000;
    });
  }

  mostrarDatos(): void {
    console.log(this.myForm);
  }

  private loadProvinces(): void {
    this.geoService.getProvinces().subscribe(
      (res: IGeoRefApiResponse) => {
        this.provinces = res.provincias;
      }
    );
  }

  private loadCities(provinceName: string): void {
    this.geoService.getCities(provinceName).subscribe(
      (res: IGeoRefApiMunicipalitiesResponse) => {
        console.log(res);
        this.municipalities = res.municipios;
      }
    )
  }

  private findMunicipalityByName(name: string) {
    return this.provinces.find(m => m.nombre == name);
  }

  allowCities(e: string): void {
    this.myForm.controls.ciudad.enable();
    this.loadCities(this.findMunicipalityByName(e)?.id || '');

  }

  get password() {
    return this.myForm.get('password');
  }

  get usuario() {
    return this.myForm.get('usuario');
  }

  get dni() {
    return this.myForm.get('dni');
  }

  get apellido() {
    return this.myForm.get('apellido');
  }

  get nombre() {
    return this.myForm.get('nombre');
  }

  get fechaNacimiento() {
    return this.myForm.get('fechaNacimiento');
  }
  get email() {
    return this.myForm.get('email');
  }

  get celular() {
    return this.myForm.get('celular');
  }

  get telefono() {
    return this.myForm.get('telefono');
  }

  get provincia() {
    return this.myForm.get('provincia');
  }

  get ciudad() {
    return this.myForm.get('ciudad');
  }

  get domicilio() {
    return this.myForm.get('domicilio');
  }

}
