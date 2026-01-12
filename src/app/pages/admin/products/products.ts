
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductServise } from '../../../services/Product.service';
import { Product } from '../../../models/product';


@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  ProductService: any;
productlist:Product[] | undefined;
constructor( private productService: ProductServise) { }

 ngOnInit(): void {

    this.productService.getProduct().subscribe({
      next: (product:Product[]) => {
      this.productlist=product;
      }
    
    });
    
  };
}



