import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TodoService} from "./todo.service";

@Component({
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  public todoForm!: FormGroup;

  constructor(private fb: FormBuilder, public todoService: TodoService) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      newTodoTitle: ['', Validators.required]
    });
  }

  addTodo() {
    if (this.todoForm.valid) {
      this.todoService.addTodo(this.todoForm.value.newTodoTitle);
      this.todoForm.reset();
    }
  }

  toggleTodoCompleted(id: number) {
    this.todoService.toggleTodoCompleted(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

}
