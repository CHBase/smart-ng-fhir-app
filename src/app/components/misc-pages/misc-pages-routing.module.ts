import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IndexComponent, StateComponent, AccessTokenComponent, UserProfileComponent,
  ConformanceComponent, ConnectComponent, LaunchComponent, RedirectComponent
} from '.';
import { AuthGaurd } from '../../misc/auth-guard';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'state', component: StateComponent, canActivate: [AuthGaurd] },
  { path: 'token', component: AccessTokenComponent, canActivate: [AuthGaurd] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGaurd] },
  { path: 'conformance', component: ConformanceComponent, canActivate: [AuthGaurd] },
  { path: 'connect/:uniqueName', component: ConnectComponent },
  { path: 'launch/:uniqueName', component: LaunchComponent },
  { path: 'redirect/:uniqueName', component: RedirectComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MiscPagesRoutingModule { }
