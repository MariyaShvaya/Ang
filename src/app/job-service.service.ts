import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobId: number = 0;
  title: string = '';
  description?: string = '';
  duration: number = 0;
  employer?: any;
  job = <any>[];
  
  private jobs = [
    {
      id: 1,
      title: 'Banker',
      description: 'I was banking all day long',
      duration: '2 years',
      employer: 'ABC BANKING'
    },
    {
      id: 2,
      title: 'Developer',
      description: 'I was coding all day long',
      duration: '3 years',
      employer: 'XYZ SOFTWARE'
    },
    {
      id: 3,
      title: 'Truck Dispatcher',
      description: 'I was dispatching, doing invoice and accointing all day long',
      duration: '5 years',
      employer: 'TQL'
    }
  ];

  getJobs(): Observable<any[]> {
    return of(this.jobs);
  }

  getJob(id: number): Observable<any> {
    const job = this.jobs.find(j => j.id === id);
    return of(job);
  }

}