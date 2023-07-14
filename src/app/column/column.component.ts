import { Component, Input } from '@angular/core';
import { Task } from "../task.service";

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @Input() title: string = '';
  @Input() tasks: Task[] = [];

  // Level 3: Move left and right code logic here
}
