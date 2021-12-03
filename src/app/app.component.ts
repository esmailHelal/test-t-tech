import { Component } from '@angular/core';
import { ApiserviceService } from './services/apiservice.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testAngular';
  constructor(public apiservices: ApiserviceService,private _auth:AuthService) {
    this._auth.checkUserAuth();
  }
}
