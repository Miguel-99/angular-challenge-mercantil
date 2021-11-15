import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout'
import { StepperOrientation } from '@angular/cdk/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICoverage } from 'src/app/models/ICoverage';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {

  personalForm: FormGroup;
  vehicleForm: FormGroup;
  coverageForm: ICoverage;

  public stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private fb: FormBuilder,
    public breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => matches ? 'horizontal' : 'vertical'));
  }

  ngOnInit(): void {
  }

  setPersonalForm(formGroup: FormGroup) {
    this.personalForm = formGroup;
  }


  setVehicleForm(formGroup: FormGroup) {
    this.vehicleForm = formGroup;
  }

  setCoverageForm(formGroup: ICoverage) {
    this.coverageForm = formGroup;
  }
}
