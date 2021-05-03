import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from '../../../shared/Models/employee.interface';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  navigationExtras: NavigationExtras = {state: 
    {value: null}
  };
  employee :Employee;

  constructor(private router:Router, private employeesvc: DoctorsService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    console.log(this.employee);
   }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
       this.router.navigate(['list'])
    }
  }
  onGoToEdit():void{
    this.navigationExtras.state!.value = this.employee;
    this.router.navigate(['/edit'], this.navigationExtras);
  }
  async onDelete():Promise<void>{
    try {
      await this.employeesvc.onDeleteEmployee(this.employee.id);
      alert('Eliminado');
      this.onGoBackList();
    } catch (err) {
      console.log(err);
    }
 
  }
  onGoBackList():void
  {
  this.router.navigate(['list'])
  }
}
