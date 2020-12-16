import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url: string = "http://backend:port_number"; //Test Server
  protected resource = "";
  get fullURL() {
    return  this.url + "/" + this.resource;
  }

  constructor(public http: HttpClient) {
  }

  getAll(params?){
    if(params){
      return this.http.get(this.fullURL, {params});
    }else{
      return this.http.get(this.fullURL);
    }
  }

  getSpecific(id, params?){
    return this.http.get(this.fullURL + '/' + id, {params});
  }

  patch(id, data, params?){
    return this.http.patch(this.fullURL + '/' + id, data, {params});
  }

  delete(id, params?){
    return this.http.delete(this.fullURL + '/' + id, {params});
  }

  post(params){
    return this.http.post(this.fullURL, {params});
  }

  postSpecific(res, params){
    return this.http.post(this.fullURL + '/' + res, {params});
  }

}
