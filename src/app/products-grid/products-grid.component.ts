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

  // Populate the products array with data
  allProducts = [
    { name: 'Onherm Sistema de Riego Por Goteo Automático Solar, Kit Riego Por Goteo Autorriego para Macetas, Regar Regularmente e Manguera de 15M para Interior Exterior Jardín Terraza Balcone Plantas Verdura', price: 10, image: 'https://via.placeholder.com/200', category: 'Herramientas' },
    { name: 'Product 2', price: 20, image: 'https://via.placeholder.com/200', category: 'Deporte' },
    { name: 'Product 3', price: 30, image: 'https://via.placeholder.com/200', category: 'Jardín' },
    { name: 'Product 4', price: 40, image: 'https://via.placeholder.com/200', category: 'Tecnología' },
    { name: 'Product 5', price: 50, image: 'https://via.placeholder.com/200', category: 'Belleza' },
    { name: 'Product 6', price: 60, image: 'https://via.placeholder.com/200', category: 'Herramientas' },
    { name: 'Product 7', price: 70, image: 'https://via.placeholder.com/200', category: 'Deporte' },
    { name: 'Product 8', price: 80, image: 'https://via.placeholder.com/200', category: 'Jardín' },
    { name: 'Product 9', price: 90, image: 'https://via.placeholder.com/200', category: 'Tecnología' },
    { name: 'Product 10', price: 100, image: 'https://via.placeholder.com/200', category: 'Belleza' },
    { name: 'Product 11', price: 110, image: 'https://via.placeholder.com/200', category: 'Herramientas' },
    { name: 'Product 12', price: 120, image: 'https://via.placeholder.com/200', category: 'Deporte' },
    { name: 'Product 13', price: 130, image: 'https://via.placeholder.com/200', category: 'Jardín' },
    { name: 'Product 14', price: 140, image: 'https://via.placeholder.com/200', category: 'Tecnología' },
    { name: 'Product 15', price: 150, image: 'https://via.placeholder.com/200', category: 'Belleza' },
    { name: 'Product 16', price: 160, image: 'https://via.placeholder.com/200', category: 'Herramientas' },
    { name: 'Product 17', price: 170, image: 'https://via.placeholder.com/200', category: 'Deporte' },
    { name: 'Product 18', price: 180, image: 'https://via.placeholder.com/200', category: 'Jardín' },
    { name: 'Product 19', price: 190, image: 'https://via.placeholder.com/200', category: 'Tecnología' },
    { name: 'Product 20', price: 200, image: 'https://via.placeholder.com/200', category: 'Belleza' },
    { name: 'Product 21', price: 210, image: 'https://via.placeholder.com/200', category: 'Herramientas' },
    { name: 'Product 22', price: 220, image: 'https://via.placeholder.com/200', category: 'Deporte' },
    { name: 'Product 23', price: 230, image: 'https://via.placeholder.com/200', category: 'Jardín' },
    { name: 'Product 24', price: 240, image: 'https://via.placeholder.com/200', category: 'Tecnología' }
  ];

  products = [...this.allProducts];
  selectedCategories: Set<string> = new Set();

  sortProductsDescending() {
    this.products.sort((a, b) => b.price - a.price);
  }

  sortProductsAscending() {
    this.products.sort((a, b) => a.price - b.price);
  }

  filterProductsByCategory() {
    if (this.selectedCategories.size === 0) {
      this.products = [...this.allProducts];
    } else {
      this.products = this.allProducts.filter(product => this.selectedCategories.has(product.category));
    }
  }

  updateSelectedCategories(category: string, isChecked: boolean) {
    console.log(this.products);
    if (isChecked) {
      this.selectedCategories.add(category);
    } else {
      this.selectedCategories.delete(category);
    }
    this.filterProductsByCategory();
  }
}