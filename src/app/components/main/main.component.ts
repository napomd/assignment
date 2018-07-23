import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dataCtrl: any = {
    'mode': {
      'home': true,
      'details' : false,
      'contact': false
    },
    'data': {}
  };

  constructor() { }

  ngOnInit() {
  }

}
