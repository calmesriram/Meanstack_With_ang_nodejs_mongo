import { Component, OnInit } from '@angular/core';
import { KeyService } from '../key.service';
import { NgForm } from "@angular/forms";
import { Schemacountry } from '../schemacountry';
import { error } from 'util';

@Component({
  selector: 'app-prasath',
  templateUrl: './prasath.component.html',
  styleUrls: ['./prasath.component.css']
})
export class PrasathComponent implements OnInit {

private myarray:any = [];
  constructor(private keyservice : KeyService) { }

  ngOnInit() {
   this.readCountries();
  //  this.create();
  
  }



  create(a,b,c,d,e){
  
     this.keyservice.createCountries(a,b,c,d,e).subscribe(res =>{
      console.log("componentes :"+a,b,c,d,e);
    },
  error =>{
    console.log("unable to save");
  })
  }

  readCountries()
  {
    this.keyservice.readCountries().subscribe(
      data => {
        console.log(data)
        this.myarray = data;
      },
      error =>
      {
        console.log(error);
      }

    )
  }

  delete(delparams:any){
    this.keyservice.delete(delparams).subscribe(
      res =>{
        console.log(delparams+"deleted successfully");
      },
      error =>{
        console.log(error+"unable to delete");
      }
      
    )
  }

}
