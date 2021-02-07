import { Component } from '@angular/core';
import { LocalizationService } from './services/localization.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD-FE-Template-Angular';
  constructor(public translate: LocalizationService){}
}
