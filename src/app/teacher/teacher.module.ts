import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    TeacherDashboardComponent
  ],
  exports: [
    TeacherDashboardComponent
  ],
    imports: [
        CommonModule,
        MatTableModule
    ]
})
export class TeacherModule { }
