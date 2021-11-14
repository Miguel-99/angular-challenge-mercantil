import { Component, OnInit } from '@angular/core';
import { ICoverage } from 'src/app/models/ICoverage';
import { CoverageService } from 'src/app/services/coverage/coverage.service';

@Component({
  selector: 'app-coverage-available',
  templateUrl: './coverage-available.component.html',
  styleUrls: ['./coverage-available.component.css']
})
export class CoverageAvailableComponent implements OnInit {

  coverages: ICoverage[];
  coverageSelected: number;

  constructor(private coverageService: CoverageService) { }

  ngOnInit(): void {
    this.getCoverages();
    setTimeout(() => {
      this.sortCoveragesByRank();
    }
      , 1000);
  }
  highlightSelection(coverage: ICoverage): void {
    this.coverageSelected = coverage.numero;
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
}
