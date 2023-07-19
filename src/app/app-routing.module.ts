import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCrewComponent } from './modules/crew/home-crew/home-crew.component';
import { ReportFormComponent } from './modules/crew/report-form/report-form.component';

const routes: Routes = [
  {
    path: 'crew',
    component: HomeCrewComponent,
  },
  {
    path: 'form',
    component: ReportFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
