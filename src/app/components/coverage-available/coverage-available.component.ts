import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICoverage } from 'src/app/models/ICoverage';
import { CoverageService } from 'src/app/services/coverage/coverage.service';

@Component({
  selector: 'app-coverage-available',
  templateUrl: './coverage-available.component.html',
  styleUrls: ['./coverage-available.component.css']
})
export class CoverageAvailableComponent implements OnInit {

  @Output() itemEvent = new EventEmitter<ICoverage>();

  coverages: ICoverage[];
  coverageSelected: ICoverage;

  constructor(private coverageService: CoverageService) { }

  ngOnInit(): void {
    this.getCoverages();
    setTimeout(() => {
      this.sortCoveragesByRank();
    }
      , 1000);
  }
  highlightSelection(coverage: ICoverage): void {
    this.coverageSelected = coverage;
  }

  getCoverages(): void {
    this.coverageService.getCoverages()
      .subscribe(coverages => {
        this.coverages = coverages;
      });
  }

  sortCoveragesByRank(): void {
    this.coverages.sort((a, b) => b.puntaje - a.puntaje);
  }

  createRange(number: number): number[] {
    return new Array(number);
  }

  sendEvent(coverage: ICoverage){
    console.log("enviando datos de cobertura al padre");
    this.itemEvent.emit(coverage);
  }
}
