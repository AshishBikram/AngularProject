import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'http://localhost:3000/employee';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    constructor(private http: HttpClient) { }

  getEmployee() {
    console.log('hello');
    return this.http.get(this.apiUrl);
  }
  saveEmployee(employee) {
        return this.http.post(this.apiUrl, employee, this.httpOptions);
    }
    updateEmployee(id, employee) {
        console.log(employee);
        return this.http.put(this.apiUrl + '/' + id, employee, this.httpOptions);
    }
    delete(id) {
        return this.http.delete(this.apiUrl + '/' + id, this.httpOptions);
    }
}
