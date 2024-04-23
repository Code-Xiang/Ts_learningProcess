import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalysisComponent } from './analysis/analysis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'form', component: FormComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
