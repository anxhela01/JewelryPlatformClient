import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      imageUrl: 'path/to/image1.jpg',
      title: 'Golden Luxe',
      category: "Women's Jewelry",
      description: 'A stunning 18k gold necklace with intricate detailing.',
      price: 799.99,
      quantity: 10
    },
    {
      imageUrl: 'path/to/image2.jpg',
      title: 'Diamond Radiance',
      category: "Women's Jewelry",
      description: 'Elegant diamond earrings that sparkle with every movement.',
      price: 1299.99,
      quantity: 5
    },
    {
      imageUrl: 'path/to/image3.jpg',
      title: 'Sapphire Elegance',
      category: 'Unisex Jewelry',
      description: 'A bold sapphire ring set in white gold, perfect for any occasion.',
      price: 1999.99,
      quantity: 3
    }
    // Add more products as needed
  ];
}
