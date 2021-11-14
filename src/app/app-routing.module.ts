import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceFormComponent } from './components/insurance-form/insurance-form.component';

const routes: Routes = [
  {path: '', component: InsuranceFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
