import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '02-second-app';
  show: boolean = false;
  color: string = 'purple';
  players: string[] = ['sachin', 'virat', 'rohit']
  inputValue: string = '';
  items: string[] = [];

  workers: any[] = [
    { id: 1, firstname: 'Rohit', lastname: 'Sharma', email: 'rohit@gmail.com' },
    { id: 2, firstname: 'virat', lastname: 'kohli', email: 'virat@gmail.com' },
    { id: 3, firstname: 'sachin', lastname: 'tendulkar', email: 'sachin@gmail.com' },

  ];

  addItem() {
    if (this.inputValue !== '') {
      this.items.push(this.inputValue);
      this.inputValue = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  completedTasks: any[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.completedTasks.push({ title: this.newTask });
      this.newTask = '';
    }
  }

  deleteTask(task: any) {
    const index = this.completedTasks.indexOf(task);
    if (index !== -1) {
      this.completedTasks.splice(index, 1);
    }
  }
}
