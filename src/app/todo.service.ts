import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import {Todo} from "./todo";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todosSignal = signal<Todo[]>(this.loadTodos());

    private loadTodos(): Todo[] {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    }

    private saveTodos(todos: Todo[]) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    get todos() {
        return this.todosSignal();
    }

    addTodo(title: string) {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false
        };
        const updatedTodos = [...this.todosSignal(), newTodo];
        this.todosSignal.set(updatedTodos);
        this.saveTodos(updatedTodos);
    }

    toggleTodoCompleted(id: number) {
        const updatedTodos = this.todosSignal().map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        this.todosSignal.set(updatedTodos);
        this.saveTodos(updatedTodos);
    }

    deleteTodo(id: number) {
        const updatedTodos = this.todosSignal().filter(todo => todo.id !== id);
        this.todosSignal.set(updatedTodos);
        this.saveTodos(updatedTodos);
    }
}
