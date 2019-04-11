import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
    @Input() titleName;
    @Input() employeeData;
    @Output() mainPage =   new EventEmitter();
  employeeForm = new FormGroup({
      id: new FormControl(''),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
  });
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
      this.addDataForm();
  }
  addDataForm() {
      this.employeeForm.patchValue({
          id: this.employeeData.id,
          firstName: this.employeeData.firstName,
          lastName: this.employeeData.lastName,
          email: this.employeeData.email,
          phone: this.employeeData.phone,
      });
  }
  onSubmit() {
      if(this.titleName === 'Add'){
          this.employeeService.saveEmployee(JSON.stringify(this.employeeForm.value)).subscribe(
              data => {
              },
              err => console.log(err),
              () => {
                  console.log('successfull added');
              }
          );
      } else {
          this.employeeService.updateEmployee(this.employeeForm.value.id, JSON.stringify(this.employeeForm.value)).subscribe(
              data => {
              },
              err => console.log(err),
              () => {
                  console.log('successfull added');
              }
          );
          this.mainPage.emit(this.employeeForm.value);
      }

  }



}
