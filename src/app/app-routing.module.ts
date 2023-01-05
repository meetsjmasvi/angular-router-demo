import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DeparmentListComponent } from './deparment-list/deparment-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/department-list', pathMatch: 'full' }, //pathMath can be either 'full' or 'prefix'
  { path: 'department-list', component: DeparmentListComponent },
  {
    path: 'department-list/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
    ],
  },
  { path: 'employee', component: EmployeeListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const RoutingComponents = [
  EmployeeListComponent,
  DeparmentListComponent,
  DepartmentDetailComponent,
  PageNotFoundComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
];
