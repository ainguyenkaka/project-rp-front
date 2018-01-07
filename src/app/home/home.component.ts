import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { News } from '../shared/models/news.model';
import { Job } from '../shared/models/job.model';
import { JobService, NewsService } from '../shared';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList: News[];

  jobList: Job[];

  constructor(
    private router: Router,
    private jobService: JobService,
    private newsService: NewsService,
  ) { }

  ngOnInit() {
    this.newsList = this.newsService.all();

    this.jobList = this.jobService.all();

    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }

}

