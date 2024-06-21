import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResultsTableComponent } from './results-table/results-table.component';
import { PodiumComponent } from './podium/podium.component';
import { Result, ressults } from '../results';

@Component({
  selector: 'f1-root',
  standalone: true,
  imports: [RouterOutlet, ResultsTableComponent, PodiumComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  logoSrc = 'assets/f1-logo.png';
  raceResults: Result[] = ressults;
}
