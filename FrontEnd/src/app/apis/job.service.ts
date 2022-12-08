import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private base_url:string = "http://localhost/oddJobs/BackEnd/";

  constructor(private http:HttpClient) {}

  get_jobs(){
    const response = this.http.get(this.base_url + "get_jobs.php");
    return response;
  }

  addJob(title: string, salary:string, age:string, start_from:string, end_on:string, location:string, description:string, user_id:string){
    const headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
    const options= { 
      headers: headers
    }

    const body = {
"title": title,
"salary" : salary,
"age_requirement" : age,
"location": location,
"description": description,
"start_from" : start_from,
"end_on" : end_on,
"user_id" : user_id
    }


     const response = this.http.post(this.base_url + "add_job.php", body, options);
     
      return response;
    }
}
