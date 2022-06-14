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
          label: 'Pages',
          items: [
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Nothing',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  }

}
