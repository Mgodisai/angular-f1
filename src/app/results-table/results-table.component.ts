import { Input, Output, Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../../results';

@Component({
  selector: 'f1-results-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.scss',
})
export class ResultsTableComponent {
  @Input() results: Result[] = [];
}
