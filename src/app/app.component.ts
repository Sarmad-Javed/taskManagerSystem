import { Component } from '@angular/core';
import { Task } from './task.service';

const data = {
  todoItems: [
    {
      id: 'a2fa4580-b071-11ec-b909-0242ac120002',
      title: 'Fix CSS',
      description: 'Homepage footer uses an inline style — should use a class',
    },
  ],
  inProgressItems: [
    {
      id: 'b0f397ea-b071-11ec-b909-0242ac120002',
      title: 'Extend hotels API',
      description: 'Add "petsAllowed" flag to the JSON response',
      assignedUser: 'a9f39c40-b073-11ec-b909-0242ac120002',
    },
    {
      id: 'b420684e-b071-11ec-b909-0242ac120002',
      title: 'Performance issues',
      description: 'Requesting available apartments is not taking > 5 seconds',
    },
  ],
  doneItems: [
    {
      id: 'b79a6646-b071-11ec-b909-0242ac120002',
      title: 'Checkout redesign',
      description: 'We need to redesign our checkout process. Talk to the designers to get new templates. If some backend changes are required, make sure that you write a Tech design document first and discuss it with out Solution Architects first',
      assignedUser: 'a5caa712-b073-11ec-b909-0242ac120002',
    },
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  toDoTasks: Task[] = data.todoItems
  inProgressTasks: Task[] = data.inProgressItems
  doneTasks: Task[] = data.doneItems

  // Level 1: Show newly added task from task form here

  // Level 2: Fetch tasks using API here

  // Level 3: Handle Move Task left/right code logic here
}
