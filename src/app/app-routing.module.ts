import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageZeroComponent } from './page-zero/page-zero.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'page-0', component: PageZeroComponent },
  { path: 'page-1', component: PageOneComponent },
  { path: 'page-2', component: PageTwoComponent },
  { path: 'page-3', component: PageZeroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
