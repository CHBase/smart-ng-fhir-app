import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGaurd } from './misc/auth-guard';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers: [AuthGaurd],
  exports: [RouterModule]
})
export class AppRoutingModule { }
