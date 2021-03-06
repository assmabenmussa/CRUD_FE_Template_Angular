import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private translate: LocalizationService) { }

  ngOnInit() {
  }

}
