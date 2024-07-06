import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductFiltersComponent } from './product-filters/product-filters.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductSearchComponent, ProductFiltersComponent, ProductsGridComponent, FooterComponent],
  template: `
    <main>
      <app-navbar />
      <section class="content">
        <app-product-search (search)="filterProductsBySearch($event)"></app-product-search>
        <app-product-filters 
          (sortDescending)="sortProductsDescending()"
          (sortAscending)="sortProductsAscending()"
          (categoryChange)="updateSelectedCategories($event)"
        />
        <app-products-grid #productGrid />
      </section>
      <app-footer></app-footer>
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

  filterProductsBySearch(searchText: string) {
    this.productGrid.filterProductsBySearch(searchText);
  }
}
