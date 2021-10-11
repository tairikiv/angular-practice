import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private STUDENT_BASE_URL = 'student';

  constructor(private httpClient: HttpClient) {
  }

  public getAllStudents() {
    return this.httpClient.get(this.STUDENT_BASE_URL);
  }
}

