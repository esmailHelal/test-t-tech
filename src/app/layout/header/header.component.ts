import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  arr: any = [
    {
      title: 'Tabs',
      active: false,
      actveClass: false,
      children: [
        {
          title: 'userA',
          active: false,
          role: 'userA',
          disable:false
        },
        {
          title: 'userB',
          active: false,
          role: 'userB',
          disable:false
        },
        {
          title: 'userC',
          active: false,
          role: 'userC',
          disable:false
        },
      ],
    },
  ];
  nameRole: any = "";
  constructor(public apiservices: ApiserviceService, private _route: Router,
    public _auth: AuthService) {
    
     
    }
  
  ngOnInit(): void {
  //  console.log(this._auth.getRole(),"test");
    this.apiservices.change_left_side.subscribe((res:any) => {
      if (res) {
        this.nameRole = this._auth.getRole();
        this.arr.forEach((element:any) => {
          element.children.forEach((element1: any) => {
            if (element1.role == this._auth.getRole()) {
              console.log(element1.role == this._auth.getRole());
              
              element1.active = true;
              element.active = true;
              element.actveClass = true;
              element1.disable = false;
            } else {
              element1.disable=true
            }
          });
        });
      }
    })
    
   
  }
  
  click() {
    this.apiservices.show = !this.apiservices.show;
  }
  toglecollapse(index: any, item: any) {
    item.active = !item.active;
  }
  toglecollapseChildren(index: any, item: any, item1: any) {

    if (item1.role == this._auth.getRole()) {
      item.actveClass = true;
      item.children.forEach((element: any, index1: any) => {
        if (index != index1) {
          element.active = false;
        }
      });
      item1.active = true;
    }
   
  }

  signOut() {
    this.arr.forEach((element:any) => {
      element.active = false;
      element.actveClass= false;
      element.children.forEach((element: any) => {
     
          element.active = false;
        element.disable = false;
      });
    });
    this._route.navigateByUrl('auth');
    window.scrollTo(0, 0);
    this._auth.signOut();
    
  }
  
  
}
