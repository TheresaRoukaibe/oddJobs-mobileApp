import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class UserService {
private base_url:string = "http://localhost/oddJobs/BackEnd/";

  constructor(private http:HttpClient) { }

  validateUser(email: string, password:string){
    const headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
    const options= { 
      headers: headers
    }

    const body = {
"email": email,
"password": password
    }


     const response = this.http.post(this.base_url + "log_in.php", body, options);
      return response;
  }

  addUser(username: string, email:string, password:string, gender:string, dob:string, address:string, number:string ){
    const headers: HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});
    const options= { 
      headers: headers
    }

    const body = {
"username": username,
"email" : email,
"password" : password,
"gender": gender,
"dob": dob,
"address" : address,
"number" : number
    }


     const response = this.http.post(this.base_url + "register.php", body, options);
     
      return response;
    }
    
    
}
