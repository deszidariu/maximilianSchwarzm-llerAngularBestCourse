import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  //? means it might not be initialized but that is fine, i'm aware of that
  @Input() name?: string;
}
