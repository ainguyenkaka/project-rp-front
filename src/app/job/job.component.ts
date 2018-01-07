import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Job } from '../shared/models/job.model';
import { JobService } from '../shared';

@Component({
  selector: 'job-page',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobList: Job[];

  constructor(
    private router: Router,
    private jobService: JobService
  ) { }

  ngOnInit() {
    this.jobList = this.jobService.all();

    this.router.events.subscribe((evt) => {
      window.scrollTo(0, 0);
    });
  }


}
