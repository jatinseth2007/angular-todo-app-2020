import { Todo } from 'src/app/models/Todo';
import { Component, OnInit } from '@angular/core';
import { TodoService } from "src/app/services/todo.service";

@Component({
    selector: 'all-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
    todos: Todo[] = [];

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
        this.todoService.fetchAllTodos().subscribe((todos: Todo[]): void => {
            this.todos = todos;
        });
    }

    /**
     * Function to handle todo delete handler
     * Jatin Seth
     */
    todoDeletedHandler(todo: Todo): void {
        this.todoService.deleteTodo(todo).subscribe(() => {
            // new todo list...
            const newTodos: Todo[] = this.todos.filter((item) => item.id !== todo.id);
            this.todos = newTodos;
        }, (err) => {
            console.error(err);
        });
    }

    /**
     * Function to handle add new todo
     * Jatin Seth
     */
    todoAddHandler(todo: any): void {
        this.todoService.addTodo(todo).subscribe((newTodo) => {
            this.todos.push(newTodo);
        }, (err) => {
            console.error(err);
        });
    }

}
