import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';
import { ProductModalComponent } from '../product-modal/product-modal.component';

@Component({
  selector: 'app-products-grid',
  standalone: true,
  imports: [CommonModule, ProductModalComponent],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {

  allProducts = [
    { name: 'Onherm Sistema de Riego Por Goteo Automático Solar, Kit Riego Por Goteo Autorriego para Macetas, Regar Regularmente e Manguera de 15M para Interior Exterior Jardín Terraza Balcone Plantas VerduraJBL Stage2 624 Juego de altavoces coche de 2 vías de Harman Kardon - 240 vatios JBL echo auto 16 - 17 cm', price: 10, image: 'https://m.media-amazon.com/images/I/61AzZfyGW7L._AC_SL1000_.jpg', category: 'Herramientas' },
    { name: 'Govee Tira LED 5m, WiFi Luces LED Habitacion Inteligente RGB, Funciona con Alexa, Google Assistant y App, 64 Modos de Escena y Sincronización de Música para PC Gaming, Techo y Fiesta', price: 20, image: 'https://m.media-amazon.com/images/I/71fTB5w2VoL._AC_SL1500_.jpg', category: 'Deporte' },
    { name: 'Zygomatic | Cortex Challenge | ¡Desfia a tu Cerebro con este Divertivo Juego de Cartas! | A Partir de 8 Años | De 2 a 6 Jugadores | 15 Minutos por Partida | Multilenguaje (incluye Español)', price: 30, image: 'https://m.media-amazon.com/images/I/7131F-TbvKL._AC_SL1024_.jpg', category: 'Jardín' },
    { name: 'Subtail Pociones Magicas Niñas - Kit De Manualidades Para Niña 6 7 8 9 10 11 Años - Fairy Magic Fabulous Potion Kit - juegos Pocimas Magicas Juguetes Niña 6 7 8 9 10 Años - Regalo Niña 6-12 Años', price: 40, image: 'https://m.media-amazon.com/images/I/91vLgEHQEIL._AC_SL1500_.jpg', category: 'Tecnología' },
    { name: 'Linkax Regalo de Fútbol para Niños 8 10 Años, 3D LED Lámpara Luz de Noche con Control Remoto, Regalos Comunión para Niños, Niño, Cumpleaños Navidad Decoración', price: 50, image: 'https://m.media-amazon.com/images/I/81Bvs2JkuVL._AC_SL1500_.jpg', category: 'Belleza' },
    { name: 'Science4you Robotics Deltabot - Kit Robotica para Niños con 117 Piezas, Construye tu Robot Interactivo, Construcciones, Robot para Montar, Juegos, Juguetes y Regalos para Niños 6 7 8 9 10 - 14 Años', price: 60, image: 'https://m.media-amazon.com/images/I/71W7R3r-wLL._AC_SL1500_.jpg', category: 'Herramientas' },
    { name: 'RHINO RESCUE Vent Chest Seal, Vendaje de Trauma de Emergencia, Kit de Primeros Auxilios, Embalaje Estéril (2 PCS)', price: 70, image: 'https://m.media-amazon.com/images/I/71MikB1dpuL._AC_SL1500_.jpg', category: 'Deporte' },
    { name: 'RHINO RESCUE Torniquetes Médicos para Hemorragias de Emergencia, Paramédico de Emergencia Militar Salvavidas para Combate al Aire Libre Táctico de Campo con Torno de Plástico, Naranja (2pc)', price: 80, image: 'https://m.media-amazon.com/images/I/71HLDH5Wp0L._SL1500_.jpg', category: 'Jardín', description: '【Operación con una sola mano】Diseño de buckle de una sola manera. Perfecto para la operación individual cuando sufferring a life-threatening extremity bleeding without anybody accompanied with  Material Premium】Resistente al viento que no se dobla o se rompe. El diseño antideslizamiento proporciona un agarre reforzado y una mejor sensación de mano en operación real. 【100% eficaz】100% eficaz en el flujo blood flow, controla rápidamente la vida de los hilos de chapa, es posible detener el hemorragia y save lives en el momento de la llave y ahorra tiempo y ahorra en vivo. Perfecto para uso militar, hogar y exploración al aire libre. 【Multiusos】RHINO tourniquet se puede utilizar en militares, artery bleeding, etc. Diferent situations require different attention, we have made made sure that our tourniquets are totalmente ajustable para ayudar en cualquier tipo de situación. 【Una herramienta de rescate imprescindible 】Nuestros torniquetes se pueden usar en varios escenarios que requieren atención urgente. Ampliamente utilizado en militares, combate, entrenamiento táctico, etc., así como al aire libre, caza, exploración, hemorragia arterial y otras ocasiones.'},
    { name: 'Govee Tira LED 5m, WiFi Luces LED Habitacion Inteligente RGB, Funciona con Alexa, Google Assistant y App, 64 Modos de Escena y Sincronización de Música para PC Gaming, Techo y Fiesta', price: 90, image: 'https://m.media-amazon.com/images/I/71fTB5w2VoL._AC_SL1500_.jpg', category: 'Tecnología' },
    { name: 'Zygomatic | Cortex Challenge | ¡Desfia a tu Cerebro con este Divertivo Juego de Cartas! | A Partir de 8 Años | De 2 a 6 Jugadores | 15 Minutos por Partida | Multilenguaje (incluye Español)', price: 100, image: 'https://m.media-amazon.com/images/I/7131F-TbvKL._AC_SL1024_.jpg', category: 'Belleza' },
    { name: 'Subtail Pociones Magicas Niñas - Kit De Manualidades Para Niña 6 7 8 9 10 11 Años - Fairy Magic Fabulous Potion Kit - juegos Pocimas Magicas Juguetes Niña 6 7 8 9 10 Años - Regalo Niña 6-12 Años', price: 110, image: 'https://m.media-amazon.com/images/I/91vLgEHQEIL._AC_SL1500_.jpg', category: 'Herramientas' },
    { name: 'Linkax Regalo de Fútbol para Niños 8 10 Años, 3D LED Lámpara Luz de Noche con Control Remoto, Regalos Comunión para Niños, Niño, Cumpleaños Navidad Decoración', price: 120, image: 'https://m.media-amazon.com/images/I/81Bvs2JkuVL._AC_SL1500_.jpg', category: 'Deporte' },
    { name: 'Science4you Robotics Deltabot - Kit Robotica para Niños con 117 Piezas, Construye tu Robot Interactivo, Construcciones, Robot para Montar, Juegos, Juguetes y Regalos para Niños 6 7 8 9 10 - 14 Años', price: 130, image: 'https://m.media-amazon.com/images/I/71W7R3r-wLL._AC_SL1500_.jpg', category: 'Jardín' },
    { name: 'RHINO RESCUE Vent Chest Seal, Vendaje de Trauma de Emergencia, Kit de Primeros Auxilios, Embalaje Estéril (2 PCS)', price: 140, image: 'https://m.media-amazon.com/images/I/71MikB1dpuL._AC_SL1500_.jpg', category: 'Tecnología' },
    { name: 'RHINO RESCUE Torniquetes Médicos para Hemorragias de Emergencia, Paramédico de Emergencia Militar Salvavidas para Combate al Aire Libre Táctico de Campo con Torno de Plástico, Naranja (2pc)', price: 150, image: 'https://m.media-amazon.com/images/I/71HLDH5Wp0L._SL1500_.jpg', category: 'Belleza' },
    { name: 'Onherm Sistema de Riego Por Goteo Automático Solar, Kit Riego Por Goteo Autorriego para Macetas, Regar Regularmente e Manguera de 15M para Interior Exterior Jardín Terraza Balcone Plantas VerduraJBL Stage2 624 Juego de altavoces coche de 2 vías de Harman Kardon - 240 vatios JBL echo auto 16 - 17 cm', price: 160, image: 'https://m.media-amazon.com/images/I/61AzZfyGW7L._AC_SL1000_.jpg', category: 'Herramientas' },
    { name: 'Govee Tira LED 5m, WiFi Luces LED Habitacion Inteligente RGB, Funciona con Alexa, Google Assistant y App, 64 Modos de Escena y Sincronización de Música para PC Gaming, Techo y Fiesta', price: 170, image: 'https://m.media-amazon.com/images/I/71fTB5w2VoL._AC_SL1500_.jpg', category: 'Deporte' },
    { name: 'Zygomatic | Cortex Challenge | ¡Desfia a tu Cerebro con este Divertivo Juego de Cartas! | A Partir de 8 Años | De 2 a 6 Jugadores | 15 Minutos por Partida | Multilenguaje (incluye Español)', price: 180, image: 'https://m.media-amazon.com/images/I/7131F-TbvKL._AC_SL1024_.jpg', category: 'Jardín' },
  ];

  products = [...this.allProducts];
  selectedCategories: Set<string> = new Set();
  noResults = false;
  selectedProduct: any;

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

  filterProductsBySearch(searchText: string) {
    if (searchText === '') {
      this.products = [...this.allProducts];
      this.noResults = false;
    } else {
      this.products = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
      this.noResults = this.products.length === 0;
    }
  }

  clearSearch() {
    this.products = [...this.allProducts];
    this.noResults = false;
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
    const modalElement = document.getElementById('productModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}