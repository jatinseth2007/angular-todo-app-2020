import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
    @Output() addNewTodo: EventEmitter<any> = new EventEmitter();

    title: string;

    constructor() { }

    ngOnInit(): void {
    }

    /**
     * Function to create new todo item
     * Jatin Seth
     */
    createNewTodoHandler(): void {
        this.addNewTodo.emit({
            title: this.title,
            completed: false
        });
    }

}
