import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input('dataCtrl') dataCtrl: any;

  constructor() { }

  ngOnInit() {

  }

  reroute(location){
    
    console.log('tessssssst');

    switch (location) {
      case 'contact':{
        this.dataCtrl.mode.contact = true; 
        this.dataCtrl.mode.home = false;
        this.dataCtrl.mode.details = false;
        break;
      }
      case 'home':{
        this.dataCtrl.mode.home = true;
        this.dataCtrl.mode.contact = false;
        this.dataCtrl.mode.details = false;
        break;
      }
      default:{
        this.dataCtrl.mode.home = true;
        this.dataCtrl.mode.contact = false;
        this.dataCtrl.mode.details = false;
        break;
      }
    }  
  }

}
