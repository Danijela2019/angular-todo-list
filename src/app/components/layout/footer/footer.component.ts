import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<p [ngClass]="{ footer: true, copyright: true }">
    Todo list {{ year }} | All rights reserved
  </p>`,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  year: number;
  constructor() {}

  ngOnInit(): void {
    //get year dinamically
    this.year = new Date().getFullYear();
  }
}
