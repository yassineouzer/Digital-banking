import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {FormBuilder,Validators, ValidationErrors } from '@angular/forms';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
   
customers! : Array<Customer>;
custfiltre!: Array<Customer>;
  SearchformGroup! :FormGroup;
  editForm=false;

  CustomeformGroup! :FormGroup;

  
  constructor(private customerservice:CustomerService,private http:HttpClient,private fb:FormBuilder) { }
 
  ngOnInit(): void {

    this.SearchformGroup=this.fb.group(
      {
        Keyword:this.fb.control(""),

      }
     
    )

    this.Handle();

   

    
   
  }

  Handle(){
    this.customerservice.getCustomers().subscribe({
      next:(data)=>{
        this.customers=data;
     } })
  }

  
  HandleDelteCustomer(c:Customer){
    this.customerservice.DeleteCustomer(c.id).subscribe({
      next:(data=>{
      this. Handle();
      })
    })

  }



  

  }




