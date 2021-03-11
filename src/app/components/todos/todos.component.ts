import { Component, OnInit} from '@angular/core';

import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todos';
import { WelcomeService } from 'src/app/services/welcome.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [`.todo-item {
            background-color: #e3e3e3;
            }
          .title {
            margin:1rem;
          }
          @media (max-width: 767px){
            .title {
              font-size:1.5rem;
            }
          }`
  ]
})
export class TodosComponent implements OnInit {
todos: Todo[]= [];
 

constructor(private todoService:TodoService, private readonly _welcomeService: WelcomeService) { }

  ngOnInit(): void {

  //for fetching data asinchronosly
  this.todoService.getTodos().subscribe(todos => this.todos = todos );
   }


   deleteTodo(todo:Todo){
      //delete form UI
      this.todos = this.todos.filter(item => item.id !== todo.id)
      // delete from the server
      this.todoService.deleteTodo(todo).subscribe();
    } 
    
    addTodo(todo:Todo){
      this.todoService.addTodo(todo).subscribe(todo=>{
        this.todos.push(todo)
      })
    }
    //getting the name from welcomepage
    getName(): string {
      return this._welcomeService.input;
    }
}


