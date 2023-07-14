import { Injectable } from '@angular/core';

export type Task = {
  id: string,
  title: string,
  description: string,
  assignedUser?: string,
  status?: string
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // Level 2: Fetch all tasks using API here
}
