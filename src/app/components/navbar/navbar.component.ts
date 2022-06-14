import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

   items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Pokemon List!',
          icon: 'pi pi-thumbs-up',
      }
  ];
  }

}
