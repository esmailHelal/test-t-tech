import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CanActiveGuard implements CanActivate {
  constructor(public _auth: AuthService, private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(next, this._auth);
    if (!this._auth.isUserAuth()) {
      this.router.navigateByUrl('/auth');
      return false;
    } else {
      return true;
    }
  }
}
