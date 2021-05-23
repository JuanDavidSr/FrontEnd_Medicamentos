import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { pharmacy } from 'src/app/shared/Models/employee.interface';
import { map } from 'rxjs/operators';
import { rejects } from 'node:assert';

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {
  pharmacy:Observable<pharmacy[]>;
  private pharmacyCollection:AngularFirestoreCollection<pharmacy>;

  constructor(private readonly afs:AngularFirestore) {
    this.pharmacyCollection = afs.collection<pharmacy>('pharmacys')
    this.getPharmacy();
   }

   onDeletePharmacy(phaId: string):Promise<void>{
     return new Promise(async(resolve,reject)=>{
       try {
         const result = await this.pharmacyCollection.doc(phaId).delete();
         resolve(result)
       } catch (err) {
         reject(err.messaje)
       }
     });
   }
   onSavePharmacy(pharmacy: pharmacy,phaId:string):Promise<void>{
    return new Promise(async(resolve,reject)=>{
    try {
      const id = phaId || this.afs.createId();
      const data = {id, ...pharmacy};
      const result = await this.pharmacyCollection.doc(id).set(data);
      resolve(result)
    } catch (err) {
      reject(err.messaje)
    }
  });
}

    private getPharmacy():void{
      this.pharmacy = this.pharmacyCollection.snapshotChanges().pipe(
        map(actions => actions.map(a=>a.payload.doc.data() as pharmacy))
      )
    } 
}
