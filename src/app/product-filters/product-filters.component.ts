import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss'
})
export class ProductFiltersComponent {
  showSortMenu = false;

  toggleSortMenu() {
    this.showSortMenu = !this.showSortMenu;
  }

  @Output() sortDescending = new EventEmitter<void>();
  @Output() sortAscending = new EventEmitter<void>();
  @Output() categoryChange = new EventEmitter<{ category: string, isChecked: boolean }>();

  onSortDescending() {
    this.sortDescending.emit();
  }

  onSortAscending() {
    this.sortAscending.emit();
  }

  onCategoryChange(category: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.categoryChange.emit({ category, isChecked });
  }
}
