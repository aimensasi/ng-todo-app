import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor(private apiService: ApiService) { }

  getAllTodos(): Observable<Todo[]>{
  	return this.apiService.getAllTodos();
  }

  getTodo(id: number): Observable<Todo>{
  	return this.apiService.getTodoById(id);
  }

  storeTodo(todo: Todo): Observable<Todo> {
  	return this.apiService.createTodo(todo);
  }

  updateTodo(todo: Todo): Observable<Todo>{
    return this.apiService.updateTodo(todo);
  }


  deleteTodo(id: number): Observable<null>{
  	return this.apiService.deleteTodoById(id);
  }

  completeTodo(todo: Todo){
  	todo.complete = !todo.complete;
  	return this.updateTodo(todo);
  }

}
