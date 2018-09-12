import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { KeyService } from '../key.service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor(private cookie:CookieService,private keyservice:KeyService) { }
 
  ngOnInit() {
   

    
  }


  gocookieset(user,pass)
  {
     console.log(user,pass);
     this.cookie.set(user,pass);
  }

  displaycookieall()
  {
    var a = this.cookie.getAll();
    console.log(a);
  }

displaycookieOne(user){
  this.cookie.get(user);
}  

  deletecookieall(){
    this.cookie.deleteAll();
    
  }
  deletecookieone(user){
  this.cookie.delete(user);
  }

  checkcookie(user)
  {
    var check:boolean = this.cookie.check(user);
    console.log(check);
  }

}
