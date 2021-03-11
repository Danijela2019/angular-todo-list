import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TodosComponent} from './components/todos/todos.component'
import {AboutComponent} from './components/pages/about/about.component'
import {WelcomeComponent} from './components/pages/welcome/welcome.component'


const routes: Routes = [
  { path: '',
  component: WelcomeComponent},
  { path: 'my-list',
    component: TodosComponent
  },
  { path: 'about',
  component: AboutComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
