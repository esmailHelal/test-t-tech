import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nameRole: any = "";
  constructor(public apiservices: ApiserviceService, public _auth: AuthService) {
    this.apiservices.hidden = false;
    this.apiservices.show = false;
  }

  ngOnInit(): void {
    this.apiservices.change_left_side.subscribe((res: any) => {
      if (res) {
        this.nameRole = this._auth.getRole();
       }
    })
  }

 
}
