import { Component, OnInit,Input } from '@angular/core';
import { record} from '../../app/record';
import { AddressBookService } from '../address-book.service';
import { ContactDetails } from '../contact-details.model';
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['../app.component.css']
})
export class RecordsComponent implements OnInit {
  record!:any;
  constructor(private addressService:AddressBookService) { }

  ngOnInit(): void {
    this.GetContact();
    this.addressService.RefreshRequired.subscribe(Response=>{
      this.GetContact();
    })    
  }
  GetContact(){
    this.addressService.getRecord().subscribe(result=>(this.record=result))
  }
}
