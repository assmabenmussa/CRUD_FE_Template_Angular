import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewComponent } from './components/dashboard/view/view.component';
import { LoginComponent } from './components/dashboard/login/login.component';

@NgModule({
  declarations: [			
    AppComponent,
      DashboardComponent,
      ViewComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
