import { Component } from '@angular/core';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  todoItem: Todo = new Todo();

  constructor(private todoDataService: TodoDataService){}

  onAddTodo(todo: Todo){
  	this.todoDataService.storeTodo(todo);
  }

  get todos(){
  	return this.todoDataService.getAllTodos();
  }

  deleteTodo(todo){
  	this.todoDataService.deleteTodo(todo.id);
  }

	completeTodo(todo){
		this.todoDataService.completeTodo(todo);
	}  
}
