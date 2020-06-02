import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TodosComponent } from 'src/app/components/todos/todos.component';
import { TodoItemComponent } from 'src/app/components/todo-item/todo-item.component';
import { AddTodoComponent } from 'src/app/components/add-todo/add-todo.component';

import { TodoService } from "src/app/services/todo.service";


@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  exports: [
    TodosComponent
  ]
})
export class TodoModuleModule { }
