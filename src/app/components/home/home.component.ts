import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from './../../services/main.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  @Input('dataCtrl') dataCtrl: any;

  loading: boolean = true;
  data: any = [];


  constructor(private mainservice : MainService,
              private _sanitizer: DomSanitizer,
              private router: Router, 
              private  route: ActivatedRoute) { }

  ngOnInit() {
    this.mainservice.getAll().subscribe(result =>{
      this.data = result.data.results;
      this.data.forEach(element => {
        if (element.description){
          if (element.description.length < 1)
            element.description = "Description missing";
        }
        else{
          element.description = "Description missing";
        }   
      });
      console.log(this.data);
      this.loading = false;
    });
  }

  viewDetails(item){
    this.dataCtrl.data = item;
    this.dataCtrl.mode.home = false;
    this.dataCtrl.mode.details = true;  
  }

}
