import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {

	todoItem: Todo = new Todo();

	@Output()
	add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo(){
  	this.add.emit(this.todoItem);
  	this.todoItem = new Todo();
  }

}
