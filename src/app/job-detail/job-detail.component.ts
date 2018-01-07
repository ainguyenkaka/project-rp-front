import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { Job } from '../shared/models/job.model';

import { JobService } from '../shared';

@Component({
  selector: 'job-detail-page',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  job: Job;

  constructor(
    private router: Router,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.job = this.jobService.get(0);

    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }


}
