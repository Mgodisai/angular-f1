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

  @Input() selectedRowIndex: number | null = null;
  @Output() selectedRowIndexChange = new EventEmitter<number | null>();

  onRowClick(index: number) {
    if (index === this.selectedRowIndex) {
      this.selectedRowIndex = null;
    } else {
      this.selectedRowIndex = index;
    }
    this.selectedRowIndexChange.emit(this.selectedRowIndex);
  }
}
