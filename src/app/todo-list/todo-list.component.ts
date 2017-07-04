import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

	@Input()
	todos: Todo[];

	@Output()
	toggelComplete: EventEmitter<Todo> = new EventEmitter();

	@Output()
	removeTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onToggelComplete(todo: Todo){
  	this.toggelComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo){
  	this.removeTodo.emit(todo);	
  }
}
