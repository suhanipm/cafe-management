import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  newItem = {
    donorName: '',
    itemName: '',
    quantity: 1
  };

  walletItems = [
    // Sample preloaded item
    { id: 1, donorName: 'Alice', itemName: 'Coffee', quantity: 2, redeemed: false }
  ];

  addWalletItem() {
    const item = {
      ...this.newItem,
      id: Date.now(),
      redeemed: false
    };
    this.walletItems.push(item);
    this.newItem = { donorName: '', itemName: '', quantity: 1 };
  }

  redeemItem(id: number) {
    const item = this.walletItems.find(i => i.id === id);
    if (item && !item.redeemed) {
      item.redeemed = true;
    }
  }
}
