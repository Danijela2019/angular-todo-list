import { Component, OnInit } from '@angular/core';

import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/Todos';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 todos: Todo[]= [];

  constructor(private todoService:TodoService) { }

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
}
