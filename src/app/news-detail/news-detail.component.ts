import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { News } from '../shared/models/news.model';

import { NewsService } from '../shared';

@Component({
  selector: 'news-detail-page',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  news: News;

  constructor(
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.news = this.newsService.get(0);

    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }


}
