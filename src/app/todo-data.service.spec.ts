import { TestBed, async, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
  	expect(service).toBeTruthy();
  }));

  describe("#getAllTodos()", () => {

  	it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
  		expect(service.getAllTodos()).toEqual([]);
  	}));

  	it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
  		let todo1 = new Todo({title: 'todo1', complete: false});
  		let todo2 = new Todo({title: 'todo2', complete: true});

  		service.storeTodo(todo1);
  		service.storeTodo(todo2);

  		expect(service.getAllTodos()).toEqual([todo1, todo2]);
  	}));
  });//allTodo

  describe("#storeTodo()", () => {
    it('should store new todos and assign incrementing id ', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'todo1', complete: false});
      let todo2 = new Todo({title: 'todo2', complete: true});

      service.storeTodo(todo1);
      service.storeTodo(todo2);

      expect(service.getTodo(1)).toEqual(todo1);
      expect(service.getTodo(2)).toEqual(todo2);
    }));
  });//StoreTodo

  describe("#updateTodo()", () => {
    it('should update todo and return the updated todo ', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'todo1', complete: false});

      service.storeTodo(todo1);

      let updatedTodo = service.updateTodo(todo1.id, {title: 'new title'});

      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if todo not found ', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'todo1', complete: false});

      service.storeTodo(todo1);

      let updatedTodo = service.updateTodo(90, {title: 'new title'});

      expect(updatedTodo).toEqual(null);
    }));
  });//UpdateTodo

  describe("#deleteTodo()", () => {
    it('should delete todo with the given id ', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'todo1', complete: false});
      let todo2 = new Todo({title: 'todo2', complete: true});

      service.storeTodo(todo1);
      service.storeTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodo(todo2.id);
      expect(service.getAllTodos()).toEqual([todo1]);
      service.deleteTodo(todo1.id);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not remove anything if todo not found', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'todo1', complete: false});
      let todo2 = new Todo({title: 'todo2', complete: true});
      
      service.storeTodo(todo1);
      service.storeTodo(todo2);

      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodo(4);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });//UpdateTodo

  describe('#completeTodo()', () => {
    it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'todo1', complete: false});

      service.storeTodo(todo1);

      let updatedTodo = service.completeTodo(todo1);
      expect(updatedTodo.complete).toEqual(true);
      service.completeTodo(todo1);
      expect(updatedTodo.complete).toEqual(false);
    }));
  });//completeTodo

});



// it('should create and store new todos', inject([], () => {}));


