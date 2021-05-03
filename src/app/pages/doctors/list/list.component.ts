import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employee$ = this.employeesvc.employees;
  navigationExtras: NavigationExtras = {state: 
    {value: null}
  };



  constructor(private router:Router,private employeesvc:DoctorsService) { }


  ngOnInit(): void {
  }

  onGoToEdit(item: any):void{
    this.navigationExtras.state!.value = item;
    this.router.navigate(['/edit'], this.navigationExtras);
  }
  onGoToSee(item: any):void{
    this.navigationExtras.state!.value = item;
    this.router.navigate(['/details'],this.navigationExtras);
  }
  async onGoToDelete(empId:string):Promise<void>{
    try {
      await this.employeesvc.onDeleteEmployee(empId);
      alert('Eliminado');
    } catch (err) {
      console.log(err);
    }
 
  }



}
