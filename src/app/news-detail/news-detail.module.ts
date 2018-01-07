import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewsDetailComponent } from './news-detail.component';
import { SharedModule } from '../shared';

const newsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'news/detail',
    component: NewsDetailComponent
  }
]);

@NgModule({
  imports: [
    newsRouting,
    SharedModule
  ],
  declarations: [
    NewsDetailComponent
  ],
  providers: [
  ]
})
export class NewsDetailModule {}
