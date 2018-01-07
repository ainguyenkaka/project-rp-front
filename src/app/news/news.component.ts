import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from '@angular/router';
import { News } from '../shared/models/news.model';

import { NewsService } from '../shared';

@Component({
  selector: 'news-page',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsList: News[];

  constructor(
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.newsList = this.newsService.all();

    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }


}
