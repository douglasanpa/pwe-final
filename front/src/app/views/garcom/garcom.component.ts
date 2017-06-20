import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garcom',
  templateUrl: './garcom.component.html',
  styleUrls: ['./garcom.component.css']
})
export class GarcomComponent implements OnInit {
  mesas=[{id:1},{id:2}];
  constructor() { }

  ngOnInit() {
  }
  acessar(id)
  {
    
  }

}
