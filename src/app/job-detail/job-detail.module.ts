import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JobDetailComponent } from './job-detail.component';
import { SharedModule } from '../shared';

const jobRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'job/detail',
    component: JobDetailComponent
  }
]);

@NgModule({
  imports: [
    jobRouting,
    SharedModule
  ],
  declarations: [
    JobDetailComponent
  ],
  providers: [
  ]
})
export class JobDetailModule {}
