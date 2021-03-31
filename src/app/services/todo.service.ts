import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Todo } from '../models/Todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  

  constructor(private db: AngularFirestore) {
   }

  getAllTodos() {
    return this.db.collection('todos').snapshotChanges();
  }

  addTodo(todo: Todo): any {
    return this.db.collection('todos').add({...todo});
  }

  toggleCompleted(todo:Todo,data:any) {
    this.db.doc('todos/' + todo.id).update(data);
  } 

  deleteTodo(todo: Todo){
    const todoId= todo.id
    this.db.doc('todos/' + todoId).delete();
  }

}
