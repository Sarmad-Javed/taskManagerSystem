import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() title: string = '';
  @Input() description: string = '';

  // Level 2: Get assigned user code logic here

  // Level 3: Move task left or right code logic here
}
