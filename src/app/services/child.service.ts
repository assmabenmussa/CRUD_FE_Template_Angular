import { Injectable } from '@angular/core';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class childService extends MainService{

  resource = "child-resource";

}
