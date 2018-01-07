import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { NewsDetailModule } from './news-detail/news-detail.module';
import { JobModule } from './job/job.module';
import { JobDetailModule } from './job-detail/job-detail.module';
import { SearchResultModule } from './search-result/search-result.module';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule,
  JobService,
  NewsService
} from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    NewsModule,
    NewsDetailModule,
    JobModule,
    JobDetailModule,
    SearchResultModule,
    rootRouting
  ],
  providers: [
    JobService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
