import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

	@Input()
	todo: Todo;

	@Output()
	toggelComplete: EventEmitter<Todo> = new EventEmitter();

	@Output()
	removeTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggelComplete(todo: Todo){
  	this.toggelComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo){
  	this.removeTodo.emit(todo);	
  }

}
