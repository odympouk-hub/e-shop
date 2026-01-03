
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {






  productlist: IProduct[] = [
    {
      productShortName: "iPhone 14",
      longName: "Apple iPhone 14 128GB Midnight",
      categoryName: "Mobile",
      desscriprion: "High-performance smartphone with A15 Bionic chip and improved dual-camera system.",
      sku: "MOB-IPH14-001",
      price: 899.99,
      thumbnailImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      isInStock: true
    },

    {
      productShortName: "Samsung Galaxy S23",
      longName: "Samsung Galaxy S23 256GB Phantom Black",
      categoryName: "Mobile",
      desscriprion: "Flagship smartphone with Snapdragon 8 Gen 2 and pro-grade triple camera.",
      sku: "MOB-SGS23-002",
      price: 799.99,
      thumbnailImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      isInStock: true
    },

    {
      productShortName: "Dell XPS 15",
      longName: "Dell XPS 15 Laptop with Intel i7 & RTX 3050",
      categoryName: "Laptop",
      desscriprion: "Premium ultrabook with InfinityEdge display, great performance and build quality.",
      sku: "LTP-DXPS15-003",
      price: 1899.99,
      thumbnailImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      isInStock: true
    },

    {
      productShortName: "MacBook Air M2",
      longName: "Apple MacBook Air M2 13.6-inch 256GB",
      categoryName: "Laptop",
      desscriprion: "Ultra-thin laptop with the powerful Apple M2 chip and Liquid Retina display.",
      sku: "LTP-MACM2-004",
      price: 1299.99,
      thumbnailImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      isInStock: false
    },

    {
      productShortName: "LG OLED 55\" C2",
      longName: "LG OLED55C2 4K Smart TV (2023)",
      categoryName: "Television",
      desscriprion: "Stunning OLED picture quality, Dolby Vision IQ and advanced smart features.",
      sku: "TV-LGOLED55-005",
      price: 1499.99,
      thumbnailImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      isInStock: true
    },

    {
      productShortName: "Samsung QLED 65\"",
      longName: "Samsung 65-Inch QLED 4K Smart TV",
      categoryName: "Television",
      desscriprion: "Large 4K QLED panel with HDR10+, vivid colors and smooth 120Hz motion.",
      sku: "TV-SMQLED65-006",
      price: 1699.99,
      thumbnailImage: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      isInStock: false
    }


  ];

}




interface IProduct {
  productShortName: string;
  longName: string;
  categoryName: string;
  desscriprion: string;
  sku: string;
  price: number;
  thumbnailImage: string;
  isInStock: boolean;
}