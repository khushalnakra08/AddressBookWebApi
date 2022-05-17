import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressBookService } from '../address-book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetails } from '../contact-details.model';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['../app.component.css']
})
export class EditContactComponent implements OnInit {

  editIndex!: number;
  editRecordForm! : FormGroup;
  constructor(private addressBookService:AddressBookService ,private route : ActivatedRoute , private router : Router) { 
    this.editForm()
  }
  
  editForm(){
    this.editRecordForm= new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      mobile: new FormControl('',[Validators.required]),
      landline: new FormControl(''),
      website: new FormControl(''),
      address: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=> {
      const recordIndex =  parseInt(params.get('id')!);
      if(recordIndex){
        this.editIndex = recordIndex;
        this.getRecord(recordIndex);
      }
    })
  }
  
  getRecord(id:number){
    this.addressBookService.getRecords(id).subscribe(
      (record:any)=> this.editContact(record)
    )
  }

  editContact(record: any){
    this.editRecordForm.patchValue({
      name : record.name,
      email : record.email,
      mobile: record.mobile,
      landline : record.landline,
      website : record.website,
      address : record.address,
    })
  }
  goToContact(){
    this.router.navigate(['/contacts'])
  }
  onUpdate(id:any){
    this.addressBookService.editRecord(id,this.editRecordForm.value).subscribe(()=>{
      this.goToContact();
      this.editRecordForm.reset()
    })
    this.addressBookService.getRecord();
  }
}