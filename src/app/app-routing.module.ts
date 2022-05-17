import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent} from'./add-details/add-details.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  { path: 'contacts', component:ContactDetailsComponent },
  {path: 'add', component: AddDetailsComponent},
  {path : 'edit/:id', component:EditContactComponent},
  { path: 'detail/:id', component: DisplayContactComponent },
  {path:'record',component:RecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddDetailsComponent, EditContactComponent,ContactDetailsComponent,DisplayContactComponent,RecordsComponent ]
