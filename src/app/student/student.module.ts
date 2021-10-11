import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard/student-dashboard.component";



@NgModule({
  declarations: [
    StudentDashboardComponent
  ],
  exports: [
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class StudentModule { }
