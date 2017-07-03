import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {
	lastID: number = 0;

	todos: Todo[] = [];
  constructor() { }

  getAllTodos(): Todo[] {
  	return this.todos;
  }

  getTodo(id: number): Todo{
  	return this.todos.filter(todo => todo.id === id).pop();
  }

  storeTodo(todo: Todo): TodoDataService {
  	if (! todo.id) {
  		todo.id = ++this.lastID;
  	}

  	this.todos.push(todo);
  	return this;
  }

  updateTodo(id: number, values: Object = {}): Todo{
  	let todo = this.getTodo(id);

  	if (! todo) {
  		return null;
  	}
  	Object.assign(todo, values);
  	return todo;
  }


  deleteTodo(id: number): TodoDataService{
  	this.todos = this.todos.filter(todo => todo.id !== id);
  	return this;
  }


  completeTodo(todo: Todo){
  	let updatedTodo = this.updateTodo(todo.id, {complete: !todo.complete});

  	return updatedTodo;
  }

}
