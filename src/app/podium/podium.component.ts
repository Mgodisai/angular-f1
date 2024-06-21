import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'f1-podium',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.scss',
})
export class PodiumComponent {
  @Input() podium: string[] = [];
  @Output() hidePodium = new EventEmitter<void>();

  hide() {
    this.hidePodium.emit();
  }

  getMedalInfo(index: number): { src: string; alt: string } | null {
    switch (index) {
      case 0:
        return { src: 'assets/gold.svg', alt: '1.' };
      case 1:
        return { src: 'assets/silver.svg', alt: '2.' };
      case 2:
        return { src: 'assets/bronze.svg', alt: '3.' };
      default:
        return null;
    }
  }
}
