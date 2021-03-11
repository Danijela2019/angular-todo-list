import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<header class="header">
                <h1>The todo list</h1>
                <nav><a routerLink="/">Home</a> |<a routerLink="/my-list">My list</a> | <a routerLink="/about">About</a></nav>
            </header>`,
  styles: [`.header {
    background: #8a00d4;
    color: #fff;
    display: flex;
    justify-content: space-between;
    height: 10vh;
    padding:0 0.5rem;
  }
  
  .header a {
    color: #fff;
    text-decoration: none;
  }`]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
