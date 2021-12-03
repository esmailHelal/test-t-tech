import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActiveGuard } from 'src/app/guards/can-active.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent ,canActivate: [CanActiveGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
