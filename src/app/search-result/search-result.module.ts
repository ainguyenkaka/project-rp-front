import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchResultComponent } from './search-result.component';
import { SharedModule } from '../shared';

const newsRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'search/result',
    component: SearchResultComponent
  }
]);

@NgModule({
  imports: [
    newsRouting,
    SharedModule
  ],
  declarations: [
    SearchResultComponent
  ],
  providers: [
  ]
})
export class SearchResultModule {}
