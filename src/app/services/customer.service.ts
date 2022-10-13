import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,of} from 'rxjs';
import { Customer } from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  url="http://localhost:5000";

  private customers!:Array<Customer>;
  constructor(private http:HttpClient) { 

  }

  public getCustomers():Observable<Array<Customer>>{
                
  return this.http.get<Array<Customer>>(this.url+"/customers");
    

  }
  public AddCustomer(cu:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.url+"/customers",cu);


  }

  HandleSearch(){
    return this.http.get(this.url+"/customers")
  }

 public SearchCustome(Keyword:string):Observable<Array<Customer>>{
               
  return this.http.get<Array<Customer>>(this.url+"/customers?name="+Keyword);
    

  }

public DeleteCustomer(id:number):Observable<Customer>{
 return this.http.delete<Customer>(this.url+"/customers/"+id);
}


 

}