import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportFormComponent } from './report-form/report-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeCrewComponent } from './home-crew/home-crew.component';

const CREWCOMPONENTS = [ReportFormComponent, HomeCrewComponent];

@NgModule({
  declarations: [CREWCOMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [CREWCOMPONENTS],
})
export class CrewModule {}
