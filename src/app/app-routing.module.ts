import { ContactusComponent } from './contactus/contactus.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlComponent } from './pl/pl.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ourservices', component: OurserviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
