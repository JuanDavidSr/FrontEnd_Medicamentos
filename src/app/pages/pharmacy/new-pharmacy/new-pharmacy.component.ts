import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pharmacy',
  template: `<app-pharmacy-form></app-pharmacy-form>`,
  styleUrls: ['./new-pharmacy.component.scss']
})
export class NewPharmacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
