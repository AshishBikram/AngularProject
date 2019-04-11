import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { from } from 'rxjs';

const routes: Routes = [
    { path: '', redirectTo: 'employee', pathMatch: 'full' },
    {path: 'employee', component: EmployeeComponent},
    { path: 'add-employee', component: AddEmployeeComponent}
];

@NgModule({
  imports: [
    CommonModule,
      RouterModule.forRoot(routes) //listening for browser location changes.
  ],
    exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
