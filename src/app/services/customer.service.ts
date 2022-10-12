import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  url="http://localhost:5000/customers";

  private customers!:Array<Customer>;
  constructor(private http:HttpClient) { 

  }

  public getCustomers():Observable<Array<Customer>>{
                
  return this.http.get<Array<Customer>>(this.url);
    

  }
  public AddCustomer(cu:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.url,cu);


  }

  deleteCustomer(id:number){
    return this.http.delete(this.url+id);
   
  
  }
}
