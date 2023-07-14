import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ColumnComponent } from './column/column.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskService } from "./task.service";
import { TaskComponent } from './task/task.component';
import { UsersService } from "./users.service";

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
