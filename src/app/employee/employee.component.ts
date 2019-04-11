import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
    showlist = true;
    title ;
    employee = new Employee();
    employeeList: any = [];
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployeeList();

  }
  getEmployeeList() {
      this.employeeService.getEmployee()
          .subscribe(
              data => {

                  this.employeeList = data;
              },
              err => console.log(err),
              () => {
                  console.log('group loaded' + JSON.stringify(this.employeeList))
              }
          );
  }
  addEmployee() {
      this.showlist = false;
      this.title = 'Add';

  }
  editEmployee(employee) {
      this.showlist = false;
      this.title = 'Edit';
      this.employee = employee;
  }
  mainPage(data) {
      this.showlist = true;
      let index = this.employeeList.findIndex(item => item.id === data.id);
      this.employeeList.splice(index, 1 , data);

  }
  deleteEmployee(id){
      console.log(id);
      this.employeeService.delete(id)
          .subscribe(
              data => {
              },
              err => console.log(err),
              () => {
                 this.employeeList.splice(this.employeeList.findIndex(item => item.id = id), 1);
              }
          );
  }


}
