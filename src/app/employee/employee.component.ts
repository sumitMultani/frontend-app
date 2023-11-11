import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employees: Employee[] = [];
  employeeToModify: Employee = new Employee();
  creatingMode: boolean = true;
  updateEmployeeId: number = 0;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      console.log(data);
      this.employees = data;
    });
  }

  addEmployee() {
     const employee = {
      employeeName : this.employeeToModify.employeeName,
      employeeDept : this.employeeToModify.employeeDept,
      employeeSalary : this.employeeToModify.employeeSalary
    };

    this.employeeService.createEmployee(employee).subscribe(()=>{
      this.loadTableData();
      window.location.reload();
    });
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.updateEmployeeId, this.employeeToModify).subscribe(()=>{
      this.loadTableData();
      window.location.reload();
    });
  }

  loadTableData() {
    //call get API.
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      console.log(data);
      this.employees = data;
    });
  }



  deleteEmployee(id: number) {
    if(confirm("Are you sure you want to delete this user !!!")){
      this.employeeService.deleteEmployee(id).subscribe(()=>{
        this.loadTableData();
        window.location.reload();
      });
    }    
  }

   openModel(employee : Employee = new Employee()){
    if(employee.employeeId == 0){
      this.employeeToModify = new Employee();
    }else{
      this.creatingMode = false
      this.employeeToModify = employee;
      this.updateEmployeeId = employee.employeeId;
    }
  }

}
