import { Component, OnInit} from '@angular/core';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  // todoItem: Todo = new Todo();
  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService){}

  ngOnInit(){
    this.todoDataService.getAllTodos().subscribe((todos) => { this.todos = todos; });
  }

  onAddTodo(todo: Todo){
  	this.todoDataService.storeTodo(todo).subscribe((todoItem) => { this.todos = this.todos.concat(todoItem); } );
  }

  onDeleteTodo(todo: Todo){
  	this.todoDataService.deleteTodo(todo.id)
    .subscribe((_) => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);
    });
  }

	onCompleteTodo(todo: Todo){
		this.todoDataService.completeTodo(todo).subscribe((updatedTodo) => { todo = updatedTodo; });
	}  
}


