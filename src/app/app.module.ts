import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './hedaer/header.component';
import { FilterPipe } from './shared/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
