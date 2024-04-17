import { Component } from '@angular/core';
import { JobService } from '../job-service.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs = <any>[];

  constructor(private jobService: JobService) { 

    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
}
