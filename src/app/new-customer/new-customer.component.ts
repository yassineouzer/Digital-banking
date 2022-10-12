import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  CustomeformGroup! :FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.CustomeformGroup=this.fb.group(
      {
        id:this.fb.control(null),
        name: this.fb.control(null),
        email:this.fb.control(null)
      }
    )

  }

  HandleSaveCustomer(){

  }

}
