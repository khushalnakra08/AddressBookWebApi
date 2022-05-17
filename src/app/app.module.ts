import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HeaderComponent } from './header/header.component';
import { AddressBookService } from './address-book.service';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordItemsComponent } from './record-items/record-items.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    RecordsComponent,
    ContactDetailsComponent,
    routingComponents,
    HeaderComponent,
    DisplayContactComponent,
    RecordItemsComponent,
  ],
  providers:[AddressBookService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
