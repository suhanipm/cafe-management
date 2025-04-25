import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  categories: string[] = ['All', 'Beverages', 'Snacks', 'Meals', 'Desserts', 'Healthy'];
  selectedCategory = 'All';

  menuItems = [
    {
      name: 'Cappuccino',
      description: 'Rich espresso with steamed milk',
      price: 120,
      image: 'assets/images/cappuccino.jpg',
      category: 'Beverages',
      isPopular: true,
      isSpicy: false,
      isVegan: false,
      canBeDonated: true
    },
    {
      name: 'Veg Sandwich',
      description: 'Grilled with cheese & fresh veggies',
      price: 90,
      image: 'assets/images/sandwich.jpg',
      category: 'Snacks',
      isPopular: false,
      isSpicy: false,
      isVegan: true,
      canBeDonated: true
    },
    {
      name: 'Chocolate Muffin',
      description: 'Moist muffin with gooey center',
      price: 70,
      image: 'assets/images/muffin.jpg',
      category: 'Desserts',
      isPopular: true,
      isSpicy: false,
      isVegan: false,
      canBeDonated: false
    },
    // ➕ Add more items here
  ];

  filteredMenu = this.menuItems;

  filterCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredMenu = this.menuItems;
    } else {
      this.filteredMenu = this.menuItems.filter(item => item.category === category);
    }
  }

  addToOrder(item: any) {
    // Logic to add to order/cart goes here
    console.log('Added to order:', item);
    alert(`${item.name} added to your order!`);
  }
}
