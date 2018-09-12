import { Injectable } from '@angular/core';
// import {HttpClient,HttpHeaders} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { Schemacountry } from './schemacountry';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  // private User : Schemacountry;
  
  // selectedUser: Schemacountry = {
   
  //   title:'',
  //   content:'',
  //   firstname:'',
  //   secondname:'',
  //   thirdname:''
  // };

  

// private baseurl:String = "http://localhost:8080";
  private baseurl:String = "http://localhost:3000";
  //  private headers = new HttpHeaders().set('Content-type','appliaction/json');
    // private headers = new HttpHeaders();//http://localhost:8080/viewall



  constructor(private http:HttpClient) { }

  readCountries(){
    // return this.http.get(this.baseurl+'/viewall',{headers:this.headers});
    return this.http.get(this.baseurl+'/viewall');
  }

  // createCountries(user: Schemacountry){
   createCountries(a,b,c,d,e){
    var z = {
      title:a,
      content:b,
      firstname:c,
      secondname:d,
      thirdname:e
    }
    // var y = JSON.stringify(z);
     console.log("Service:"+z);
    // alert(pushdata);
      //  return this.http.post(this.baseurl+'/make',z,{headers:this.headers});
        return this.http.post(this.baseurl+'/make',z);

      //  return this.http.post(`${this.baseurl}/make`,z);/erase/:id
  }

  delete(id:any){
   
    console.log("service:"+id);
    return this.http.post(this.baseurl+'/erase',id);
  }
}
