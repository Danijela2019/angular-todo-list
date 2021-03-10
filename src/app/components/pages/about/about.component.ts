import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ImagePath: string; 

  constructor() {
    this.ImagePath = '/assets/images/remote2.png'
   }

  ngOnInit(): void {
  }

}
