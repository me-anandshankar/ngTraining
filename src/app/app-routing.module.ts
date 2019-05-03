import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [

  {
    path: '',
    component: Page1Component
    //,canActivate: [AuthGuard]
    //redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'Page1',
    component: Page1Component
    //,canActivate: [AuthGuard]
    //redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'Page2',
    component: Page2Component
    //,canActivate: [AuthGuard]
  },
  {
    path: 'Page3',
    component: FirstComponent
    //,canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
