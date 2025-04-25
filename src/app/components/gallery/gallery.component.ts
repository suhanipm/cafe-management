import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryImages = [
    {
      src: 'https://source.unsplash.com/400x300/?cafe',
      alt: 'Cafe Interior',
      caption: 'Cozy Cafe Ambience'
    },
    {
      src: 'https://source.unsplash.com/400x300/?coffee',
      alt: 'Coffee',
      caption: 'Signature Cappuccino'
    },
    {
      src: 'https://source.unsplash.com/400x300/?dessert',
      alt: 'Dessert',
      caption: 'Delicious Chocolate Muffin'
    },
    {
      src: 'https://source.unsplash.com/400x300/?barista',
      alt: 'Behind the scenes',
      caption: 'Behind the Scenes'
    },
    {
      src: 'https://source.unsplash.com/400x300/?customer',
      alt: 'Customer',
      caption: 'Happy Customer Moment'
    },
    {
      src: 'https://source.unsplash.com/400x300/?event',
      alt: 'Live event',
      caption: 'Open Mic Night'
    }
  ];
  
}
