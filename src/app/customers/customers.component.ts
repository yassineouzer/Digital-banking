import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../model/customer';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
   
customers! : Array<Customer>;
  constructor(private customerservice:CustomerService) { }
 
  ngOnInit(): void {
    this.customerservice.getCustomers().subscribe({
      next:(data=>{
        this.customers=data;
      })
    })
  }}
  
