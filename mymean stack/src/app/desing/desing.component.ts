import { Component, OnInit } from '@angular/core';
import { KeyService } from '../key.service';
import { Schemacountry } from '../schemacountry';

@Component({
  selector: 'app-desing',
  templateUrl: './desing.component.html',
  styleUrls: ['./desing.component.css']
})
export class DesingComponent implements OnInit {
private myarray:any=[];
  constructor(private keyservice:KeyService) { }

  ngOnInit() {
    this.readCountries();
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
}
