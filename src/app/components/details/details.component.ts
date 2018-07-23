import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  @Input('dataCtrl') dataCtrl: any;

  credentials: any = JSON.parse(localStorage.getItem("credentials"));
  postbody: any = {};
  settings: any = [];  
  loading: boolean = true;


  constructor() { }

  ngOnInit() {
    console.log(this.dataCtrl);
    this.loading = false;
  }

  back(){
    this.dataCtrl.mode.details = false;
    this.dataCtrl.mode.home = true;
  }

}
