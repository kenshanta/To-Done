import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/interfaces/Task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.tasksService
      .deleteTasks(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    console.log(task, this.tasks);
    this.tasksService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
