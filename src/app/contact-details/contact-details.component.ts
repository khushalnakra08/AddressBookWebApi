import { Component, Input, OnInit } from '@angular/core';
import { AddressBookService } from '../address-book.service';
import { record} from '../../app/record';
import { ContactDetails } from '../contact-details.model';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['../app.component.css']
})
export class ContactDetailsComponent implements OnInit {
  recordItems:any;
  constructor(private addressBookService:AddressBookService) { }
  ngOnInit() {
    this.addressBookService.getRecord().subscribe(result=>{
      this.recordItems=result;
    })
  }
}