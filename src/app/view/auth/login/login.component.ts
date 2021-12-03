import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';


declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loadingsingleprodc = false;
  valid = false;
  invalid = false;
  message = '';
  invaild_error = false;
  constructor(
    public apiservices: ApiserviceService,
    private _router: Router,
    public _auth: AuthService,
   
  ) {
    this.apiservices.hidden = true;
    this.apiservices.show = true;
  }

  ngOnInit(): void {
   

   
  }
  login(myForm: any) {
    if (myForm.status != 'INVALID') {
      console.log(myForm);
      let login;
      this.apiservices.getJSON().subscribe(data => {
        
      
        login = data.find((element:any) => {
          if (element.email == myForm.value.email && element.password == myForm.value.password) return element;
        });
        if (login) {
         
          this._auth.login(login.name);
          this._auth.role(login.role);
          this._auth.checkUserAuth();
          this.apiservices.change_left_side.next(true);
         
          
          this.valid = true;
                $('#popup').modal('show');
                setTimeout(() => {
                $('#popup').modal('hide');
                    this._router.navigateByUrl('home');
                    this.valid = false;
                }, 2000);
        } else {
         

          this.invalid = true;
        
         
          $('#popup').modal('show');

          setTimeout(() => {
            $('#popup').modal('hide');

          
            this.invalid = false;
          }, 3000);
        }
      });

    
      
     /*  this._auth.login();
      this._auth.checkUserAuth(); */
    }
  }
  
}
