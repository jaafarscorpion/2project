import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { ProComponent } from './pro/pro.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PlComponent } from './pl/pl.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurserviceComponent,
    MyaccountComponent,
    ProComponent,
    ContactusComponent,
    PlComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
