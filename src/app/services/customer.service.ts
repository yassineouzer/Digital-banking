import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers!:Array<Customer>;
  constructor(private http:HttpClient) { 

  }

  public getCustomers():Observable<Array<Customer>>{
                
  return this.http.get<Array<Customer>>("http://localhost:5000/customers");
    

  }
}
