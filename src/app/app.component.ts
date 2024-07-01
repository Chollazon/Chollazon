import { Component } from '@angular/core';
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
        <app-product-filters />
        <app-products-grid />
      </section>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chollazon';
}
