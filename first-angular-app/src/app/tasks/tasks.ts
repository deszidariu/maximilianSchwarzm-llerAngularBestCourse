import { Component, Input } from '@angular/core';
import { Task } from './task/task';

@Component({
  imports: [Task],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  //? means it might not be initialized but that is fine, i'm aware of that
  @Input() name?: string;
}
