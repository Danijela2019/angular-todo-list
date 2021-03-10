import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Todo } from '../models/Todos';
import { Observable , of } from 'rxjs';
import {TODOS} from '../mock-todos'

const  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosLimit:string = '?_limit=5';
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }
//get Todos using jsonplaceholder API https://jsonplaceholder.typicode.com/guide/
/*getTodos() : Observable<Todo[]> {
   return this.http.get<Todo[]>(this.todosUrl.concat(this.todosLimit))
  }*/

//get Todos localy asychronosly from  a mock data file
getTodos(): Observable<Todo[]> {
  const todos = of(TODOS);
  return todos;
}

  //toggle completed Todos
  toggleCompleted(todo:Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // delete Todos
  deleteTodo(todo:Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  } 
  // add todos
  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl,todo, httpOptions)
  }
}
