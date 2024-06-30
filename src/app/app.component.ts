import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductsGridComponent],
  template: `
    <main>
      <app-navbar />
      <section class="content">
        <app-products-grid />
      </section>
    </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chollazon';
}
