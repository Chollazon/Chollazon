import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
}
