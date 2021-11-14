import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { VehicleDataComponent } from './components/vehicle-data/vehicle-data.component';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { CoverageAvailableComponent } from './components/coverage-available/coverage-available.component';
import { SummaryFormComponent } from './components/summary-form/summary-form.component';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { InsuranceFormComponent } from './components/insurance-form/insurance-form.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VehicleDataComponent,
    PersonalDataComponent,
    CoverageAvailableComponent,
    SummaryFormComponent,
    InsuranceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
