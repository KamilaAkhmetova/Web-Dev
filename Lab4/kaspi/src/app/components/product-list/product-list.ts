import { Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCard } from '../product-card/product-card';
import { AddProduct } from '../add-product/add-product';
import { Product } from '../../models/product.model';
import { inject } from '@angular/core';

const STORAGE_KEY = 'qaspi_products';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, AddProduct],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private http = inject(HttpClient);
  products: Product[] = [];

  ngOnInit(): void {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      this.products = JSON.parse(saved);
    } else {
      this.http.get<Product[]>('data.json').subscribe({
        next: (data) => {
          this.products = data;
          this.save();
        },
        error: (err) => console.error('Failed to load products:', err)
      });
    }
  }

  addProduct(product: Product): void {
    this.products = [...this.products, product];
    this.save();
  }

  private save(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.products));
  }
}
