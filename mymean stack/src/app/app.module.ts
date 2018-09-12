import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DesingComponent } from './desing/desing.component';
import { PrasathComponent } from './prasath/prasath.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeyService } from './key.service'
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './cookie/cookie.component';

var ramroutes :Routes =[
{
  path:'',
  component:DesingComponent
},
{
  path:'prasath',component:PrasathComponent
},
{
  path:'cookie',component:CookieComponent
}

];
@NgModule({
  declarations: [
    AppComponent,
    DesingComponent,
    PrasathComponent,
    NavbarComponent,
    CookieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ramroutes)
  ],
  providers: [KeyService ,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
