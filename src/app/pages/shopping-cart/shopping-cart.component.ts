/*import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

}

import { Component } from '@angular/core';
import { ShoppingCartService } from '.services/shopping-cart.service'; // Import your service for handling purchases

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  shoppingCart: any[] = []; // Your shopping cart data
  totalAmount: number = 0; // Variable to store the total amount

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    // Fetch shopping cart items on component load (if necessary)
    this.getShoppingCartItems();
  }

  // Method to calculate the total amount
  getTotal() {
    this.totalAmount = this.shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return this.totalAmount;
  }

  // Method to handle "Buy Now" button click
  buyNow() {
    // Call the service or API to complete the purchase
    this.shoppingCartService.buyItems(this.shoppingCart).subscribe(response => {
      // Handle the success response (e.g., show a confirmation message or redirect)
      alert('Purchase completed successfully!');
      this.shoppingCart = []; // Clear the cart after purchase
    }, error => {
      // Handle the error response (e.g., show an error message)
      alert('There was an error completing your purchase. Please try again.');
    });
  }

  // Other methods (updateBasket, removeItem, etc.)
}
*/
