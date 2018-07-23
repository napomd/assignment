import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { BaseService } from './baseservice.service';

@Injectable()
export class MainService  extends BaseService {

  constructor(http:Http) { 
    super("/v1/public/comics?ts=1&apikey=1459aa2b4881130902e7b8a806457f68&hash=ae867e8afe6b486c74945f1eb8970826", http);
  }

  getImages(body: any) {
    return this.http.post(this.url, body, this.options).map(response => response.json());
  }

  updateImage(body: any){
    return this.http.post(`${this.url}delete`, body, this.options).map(response => response.json());
  }

}
