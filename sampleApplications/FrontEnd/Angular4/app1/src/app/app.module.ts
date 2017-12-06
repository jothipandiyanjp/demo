import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { NextButtonComponent }  from './NextPage/nextpage.component';
import { PreviousButtonComponent }  from './PreviousPage/previous.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
      { path: '', component: PreviousButtonComponent },

    { path: 'app', component: AppComponent },
     {path: 'home', component: PreviousButtonComponent },
    { path: 'nextpage', component: NextButtonComponent },
    
];
@NgModule({
  imports:      [ BrowserModule,FormsModule ,    RouterModule.forRoot(routes)],
  declarations: [ AppComponent,NextButtonComponent, PreviousButtonComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
