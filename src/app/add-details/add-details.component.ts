import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressBookService } from '../address-book.service';
import { Router } from '@angular/router';
import { ContactDetails } from '../contact-details.model';
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['../app.component.css']
})
export class AddDetailsComponent implements OnInit {
  addRecordForm!:FormGroup;
  constructor(private addressBookService:AddressBookService, private router : Router) {
    this.addRecord()
  }
  ngOnInit(): void {}
  addRecord(){
    this.addRecordForm= new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[Validators.required]),
      landline: new FormControl(''),
      website: new FormControl(''),
      address: new FormControl(''),
    });
  }
  goToContact(){
    this.router.navigate(['/contacts'])
  }
  onSubmit(){
    this.addressBookService.addRecord(this.addRecordForm.value).subscribe(()=>{
      this.addRecordForm.reset();
      this.goToContact();
    })
  }
}

