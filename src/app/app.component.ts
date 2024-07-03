import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductFiltersComponent, ProductsGridComponent],
  template: `
    <main>
      <app-navbar />
      <section class="content">
        <app-product-filters 
          (sortDescending)="sortProductsDescending()"
          (sortAscending)="sortProductsAscending()"
          (categoryChange)="updateSelectedCategories($event)"
        />
        <app-products-grid #productGrid />
      </section>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chollazon';

  @ViewChild('productGrid') productGrid!: ProductsGridComponent;

  sortProductsDescending() {
    this.productGrid.sortProductsDescending();
  }

  sortProductsAscending() {
    this.productGrid.sortProductsAscending();
  }

  updateSelectedCategories(event: { category: string, isChecked: boolean }) {
    this.productGrid.updateSelectedCategories(event.category, event.isChecked);
  }
}
