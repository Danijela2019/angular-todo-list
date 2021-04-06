import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/Todos';
import { WelcomeService } from 'src/app/services/welcome.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styles: [
    `
      .todo-item {
        background-color: #e3e3e3;
      }
      .title {
        margin: 1rem;
      }
      @media (max-width: 767px) {
        .title {
          font-size: 1.5rem;
        }
      }
    `,
  ],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private readonly welcomeService: WelcomeService
  ) {}

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((data) => {
      this.todos = data.map((e: any) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        } as Todo;
      });
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((item) => item.id !== todo.id);
    this.todoService.deleteTodo(todo);
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo);
  }

  getName(): string {
    return this.welcomeService.input;
  }
}
