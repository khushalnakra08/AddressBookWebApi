import { Component, OnInit,Input } from '@angular/core';
import { record } from '../record';

@Component({
  selector: 'app-record-items',
  templateUrl: './record-items.component.html',
  styleUrls: ['../app.component.css']
})
export class RecordItemsComponent implements OnInit {

  @Input() record!:record;
  constructor() { }

  ngOnInit(): void {
  }
}
