export class Employee {

    employeeId: number;
    employeeName: string;
    employeeDept: string;
    employeeSalary: number;

    constructor( ) {
        this.employeeId = 0;
        this.employeeName = "";
        this.employeeDept = "";
        this.employeeSalary = 0;
    }

    public setId(id:number){
        this.employeeId = id;
    }

    public getId(){
        return this.employeeId;
    }

    public setName(name:string){
        this.employeeName = name;
    }

    public getName(){
        return this.employeeName;
    }

    public setDept(dept:string){
        this.employeeDept = dept;
    }

    public getDept(){
        return this.employeeDept;
    }

    public setSalary(salary:number){
        this.employeeSalary = salary;
    }

    public getSalary(){
        return this.employeeSalary;
    }
}
