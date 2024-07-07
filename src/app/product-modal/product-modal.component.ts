import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss'
})
export class ProductModalComponent {
  @Input() product: any;

  shareProduct() {
    const shareData = {
      title: this.product.name,
      text: `Estoy interesado en este producto:\n${this.product.name}`
    }
    if (navigator.share) {
      navigator.share(shareData)
    }
  }
}
