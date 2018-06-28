import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent, ResourcesTableContainerComponent, EditResourceComponent } from '.';
import { AuthGaurd } from '../../misc/auth-guard';

const routes: Routes = [
  { path: 'resources/Patient', component: PatientComponent, canActivate: [AuthGaurd] },
  { path: 'resources/:resourceType', component: ResourcesTableContainerComponent, canActivate: [AuthGaurd] },
  { path: 'resources/:resourceType/:id', component: EditResourceComponent, canActivate: [AuthGaurd] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
