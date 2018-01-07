import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';
import { SharedModule } from '../shared';

const newsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'news',
    component: NewsComponent
  }
]);

@NgModule({
  imports: [
    newsRouting,
    SharedModule
  ],
  declarations: [
    NewsComponent
  ],
  providers: [
  ]
})
export class NewsModule {}
