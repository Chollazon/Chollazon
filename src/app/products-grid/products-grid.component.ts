import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {
  products: any[] = []; // Define the products array

  constructor() {
    // Populate the products array with data
    this.products = [
      { name: 'Product 1', price: '10€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 2', price: '20€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 3', price: '30€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 4', price: '40€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 5', price: '50€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 6', price: '60€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 7', price: '70€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 8', price: '80€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 9', price: '90€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 10', price: '100€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 11', price: '110€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 12', price: '120€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 13', price: '130€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 14', price: '140€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 15', price: '150€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 16', price: '160€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 17', price: '170€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 18', price: '180€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 19', price: '190€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 20', price: '200€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 21', price: '210€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 22', price: '220€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 23', price: '230€', image: 'https://via.placeholder.com/200' },
      { name: 'Product 24', price: '240€', image: 'https://via.placeholder.com/200' }
    ];
  }
}
