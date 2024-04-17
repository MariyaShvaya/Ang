import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  jobId: number = 0;
  title: string = '';
  description?: string = '';
  duration: number = 0;
  employer?: any;
  job = <any>[];


  constructor(private route: ActivatedRoute, private jobService: JobService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('jobId') || '0', 10);
      if (id) {
        this.getJobDetails(id);
      }
    });
  }

  getJobDetails(jobId: number): void {
    this.jobService.getJob(jobId).subscribe(
      job => this.job = job,
      error => console.error('Error fetching job details:', error)
    );
  }
} 

 