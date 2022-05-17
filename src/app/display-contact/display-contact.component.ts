import { Component, OnInit,Input } from '@angular/core';
import { AddressBookService } from '../address-book.service';
import { record} from '../../app/record';
import { Observable} from 'rxjs';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['../app.component.css']
})
export class DisplayContactComponent implements OnInit {
  selectedRecord!:record;
  constructor(private router : Router, private route: ActivatedRoute, private addressBookService:AddressBookService) { 
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const currentIndex = parseInt(params.get('id')!);
      if (currentIndex) {
        this.getRecord(currentIndex).subscribe((data:any) => {
        this.selectedRecord = data;
        });
      } 
    });
  }
  getRecord(id : number){
    return this.addressBookService.getRecords((id));
  }

  deleteRecord(id: number) {
    this.addressBookService.deleteRecord(id).subscribe(() => {
     this.router.navigate(['/contacts'])
    });
  }
}