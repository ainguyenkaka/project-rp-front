import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Job } from '../shared/models/job.model';
import { News } from '../shared/models/news.model';
import { JobService, NewsService } from '../shared';

@Component({
  selector: 'search-result-page',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  newsList: News[];
  jobList: Job[];

  constructor(
    private router: Router,
    private newsService: NewsService,
    private jobService: JobService,
  ) { }

  ngOnInit() {
    this.jobList = this.jobService.all();

    this.newsList = this.newsService.all();

    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }


}
