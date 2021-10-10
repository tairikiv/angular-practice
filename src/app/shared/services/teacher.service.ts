import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private TEACHER_BASE_URL = 'teacher';

  constructor(private httpClient: HttpClient) {
  }

  public getAllTeachers(){
    return this.httpClient.get(this.TEACHER_BASE_URL);
  }
}
