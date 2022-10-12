import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  CustomeformGroup! :FormGroup;
  constructor(private fb:FormBuilder,private customerservice:CustomerService) { }

  ngOnInit(): void {
    this.CustomeformGroup=this.fb.group(
      {
        id:this.fb.control(null,),
        name: this.fb.control(null,[Validators.required,Validators.minLength(5)]),
        email:this.fb.control(null,[Validators.email,Validators.required])
      }
    )

  }

  HandleSaveCustomer(){

 this.customerservice.AddCustomer(this.CustomeformGroup.value).subscribe({
   next:(data=>{
      alert("customer added succesful");
   })
 })
  }

}
