import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActiveRegisterGuard } from 'src/app/guards/can-active-register.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent,canActivate: [CanActiveRegisterGuard],}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
