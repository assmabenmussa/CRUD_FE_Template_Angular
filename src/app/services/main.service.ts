import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  // url: string = "http://localhost:4200/api/v1"; //Mockoon
  url: string = "http://backend:port_number"; //Test Server
  fullURL: string;

  constructor(private resource: string, public http: HttpClient) {
    this.fullURL = this.url + "/" + resource;
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
