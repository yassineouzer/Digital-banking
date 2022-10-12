import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
   
customers! : Array<any>;
  constructor(private http:HttpClient) { }
 
  ngOnInit(): void {
    ;
     this.http.get("http://localhost:5000/customers").subscribe({
       next :(da:any)=>{
         this.customers=da;
        
       
        },
      }
       )}
      
     
     
    }
