import { Component, OnInit, Input,EventEmitter, Output} from '@angular/core';

import { Todo } from 'src/app/models/Todos';
import {TodoService} from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();


  constructor(private todoService:TodoService) {
   }

  ngOnInit(): void {
  }

  isDone(){
    return this.todo.completed ? 'block': 'none';
  }
  onToggle(todo :Todo){
    //Toggle in the UI
    todo.completed = !todo.completed;
    // Toggle in the server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo,'returned'));
  }

  onDelete(todo:Todo){
    this.deleteTodo.emit(todo)
  } 

}
