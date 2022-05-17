import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDetails } from './contact-details.model';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  constructor(private http:HttpClient) {}
  ApiUrl = 'https://localhost:7268/api/AddressBook'
  contactData:ContactDetails=new ContactDetails();
  list:ContactDetails[];
  getRecord():Observable<object>{
    return this.http.get(this.ApiUrl);
  }

  getRecords(id:number){
    return this.http.get(`${this.ApiUrl}/${id}`);
  }

  addRecord(formData:ContactDetails) {
    return this.http.post(this.ApiUrl,formData).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }

  editRecord(id:number,formData:ContactDetails){
    return this.http.put(`${this.ApiUrl}/${id}`, formData).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }

  deleteRecord(id:number){
    return this.http.delete(`${this.ApiUrl}/${id}`).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
  private refresh=new Subject<void>();
  get RefreshRequired(){
    return this.refresh;
  }
}

