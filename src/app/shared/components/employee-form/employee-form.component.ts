import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../Models/employee.interface';
import { DoctorsService } from '../../../pages/doctors/doctors.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employee : Employee;
  employeeForm!:FormGroup;

  private isEmail=/\S+@\S+\.\S+/;
  
  constructor(private router:Router,private fb:FormBuilder,private Employeesvc:DoctorsService) {

    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initForm();
   }


  ngOnInit(): void {

    if(typeof this.employee === 'undefined'){
      this.router.navigate(['new'])
    }else{
      this.employeeForm.patchValue(this.employee)
    }
  }
  onGoBackList():void{
this.router.navigate(['list'])
  }
 

  onSave():void {
    console.log('save',this.employeeForm.value);
    if(this.employeeForm.valid){
      const employee = this.employeeForm.value;
      const EmployeeId =this.employee ?.id || null;
      this.Employeesvc.onSaveEmployee(employee, EmployeeId!);
      this.employeeForm.reset();
      alert('Su usuario ha sido creado ó Actualizado')
    }
  }

  private initForm():void{
    this.employeeForm = this.fb.group({
      name:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(this.isEmail)]],
      startDate:['',[Validators.required]],

    })
  }

  isValidField(field:string):string{
      const validateField =this.employeeForm.get(field );
      return(!validateField!.valid && validateField?.touched)
      ? 'is-invalid' : validateField?.touched? 'is-valid' : '';
  }

}
