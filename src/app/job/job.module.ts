import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JobComponent } from './job.component';
import { SharedModule } from '../shared';

const newsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'jobs',
    component: JobComponent
  }
]);

@NgModule({
  imports: [
    newsRouting,
    SharedModule
  ],
  declarations: [
    JobComponent
  ],
  providers: [
  ]
})
export class JobModule {}
