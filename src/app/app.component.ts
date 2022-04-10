import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'medical-shop-ui';

  services: any[];

  ngOnInit(): void {
    this.services = [{
      path: 'shop', description: 'Shop Services'
    },
    {
      path: 'item', description: 'Item Services'
    },
    {
      path: 'sale', description: 'Sale Services'
    }
  ];
  }
}
