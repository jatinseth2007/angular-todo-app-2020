import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    httpOptions: object = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) { 
        console.log("TodoService defined");
    }

    /**
     * Function to fetch all todos
     * Jatin Seth
     */
    fetchAllTodos(): Observable<Todo[]> {
        const url: string = `${environment.api.baseUrl}todos?_limit=15`;
        return this.http.get<Todo[]>(url);
    }

    /**
     * Function to change status of todo
     * Jatin Seth
     */
    changeStatus(todo: Todo): Observable<any> {
        const url: string = `${environment.api.baseUrl}todos/${todo.id}`;
        return this.http.put(url, todo, this.httpOptions);
    }

    /**
     * Function to delete todo
     * Jatin Seth
     */
    deleteTodo(todo: Todo): Observable<any> {
        const url: string = `${environment.api.baseUrl}todos/${todo.id}`;
        return this.http.delete(url, this.httpOptions);
    }

    /**
     * Function to add new todo
     * Jatin Seth
     */
    addTodo(todo: any): Observable<Todo> {
        const url: string = `${environment.api.baseUrl}todos`;
        return this.http.post<Todo>(url, todo, this.httpOptions);
    }
}
