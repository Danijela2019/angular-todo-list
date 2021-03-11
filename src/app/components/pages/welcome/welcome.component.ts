import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

import { WelcomeService } from '../../../services/welcome.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 

  constructor( private router:Router, private readonly _welcomeService: WelcomeService) { }
  input: string;

  ngOnInit(): void {
  }
  onRedirectHome(): void {
    const navigationDetails: string[] = ['/my-list'];
    this.router.navigate(navigationDetails);
  }
  
  public onInput(formEvent): void {
    this.input = formEvent.target.value;
    this._welcomeService.input = formEvent.target.value;
 }

}
