import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Employee } from '../../shared/Models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  employees!: Observable<Employee[]>;

  private employeesCollection!: AngularFirestoreCollection<Employee>;
  constructor(private readonly afs:AngularFirestore) {
    this.employeesCollection = afs.collection<Employee>('employees');
    this.getEmployees();

   }

   onDeleteEmployee(empId:string): Promise<void>{
      return new Promise (async (resolve,reject) => {
        try {
          const result = this.employeesCollection.doc(empId).delete();
          resolve(result);
        } catch (error) {
          reject(error.message)
        }
      })
   }

   onSaveEmployee(employee:Employee,empId:string): Promise<void>{
      return new Promise(async (Resolve,reject) => {
        try{
        const id=empId || this.afs.createId();
        const data= {id, ...employee};
        const result =this.employeesCollection.doc(id).set(data);
        Resolve(result);
        }catch(err){
          reject(err.message)
        }
      })
   }

  private getEmployees():void{
    this.employees = this.employeesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a =>a.payload.doc.data()as Employee))
    );

  }
}
