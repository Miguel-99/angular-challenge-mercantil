import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICoverage } from 'src/app/models/ICoverage';

@Component({
  selector: 'app-summary-form',
  templateUrl: './summary-form.component.html',
  styleUrls: ['./summary-form.component.css']
})
export class SummaryFormComponent implements OnInit {

  @Input() personalDataForm: FormGroup;
  @Input() vehicleDataForm: FormGroup;
  @Input() coverageDataForm: ICoverage;

  constructor() { }

  ngOnInit(): void {
  }
}
