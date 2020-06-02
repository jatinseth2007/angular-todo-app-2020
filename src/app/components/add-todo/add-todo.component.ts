import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
    @Output() addNewTodo: EventEmitter<any> = new EventEmitter();

    addTodoForm = new FormGroup({
        title: new FormControl("", [Validators.required])
    });

    constructor() { }

    ngOnInit(): void {
    }

    /**
     * Function to create new todo item
     * Jatin Seth
     */
    createNewTodoHandler(): void {
        if (this.addTodoForm.status === 'VALID') {
            this.addNewTodo.emit({
                title: this.addTodoForm.get("title").value,
                completed: false
            });
        }else{
            alert("errors found in form");
        }//EOI
    }

    get title() {
        return this.addTodoForm.get("title");
    }

}
