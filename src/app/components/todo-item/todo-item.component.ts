import { Todo } from 'src/app/models/Todo';
import { TodoService } from "src/app/services/todo.service";
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
    @Input() todoItem: Todo;
    @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter();

    constructor(private todoService: TodoService) { }

    ngOnInit(): void {
    }

    /**
     * Function to pick todo Item classes
     * Jatin Seth
     */
    pickTodoClasses(): object {
        try {
            let output = {
                "todo": true,
                "is-completed": this.todoItem.completed
            };
            return output;
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * Function to handle checkbox value change handler
     * Jatin Seth
     */
    onStatusChangeHandler() {
        this.todoService.changeStatus(this.todoItem).subscribe((todo) => {
            console.log(todo);
            this.todoItem.completed = !this.todoItem.completed;
        }, (err) => {
            console.log(err);
        });
    }

    /**
     * Function to handle delete event
     * Jatin Seth
     */
    onDeleteHandler() {
        this.todoDeleted.emit(this.todoItem);
    }

}
