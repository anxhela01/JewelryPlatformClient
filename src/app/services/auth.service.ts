import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthenticationResponse, UserSignIn, UserSignUp} from "../models/user.model";
import {environment} from "../environments/environment";
import {BehaviorSubject, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private userSubject: BehaviorSubject<AuthenticationResponse> = new BehaviorSubject<AuthenticationResponse>(this.getUser());

  get userSubject$() {
    return this.userSubject.asObservable();
  }
  constructor(private httpClient : HttpClient, private router : Router) { }


  login(request: UserSignIn){
    return this.httpClient
      .post<AuthenticationResponse>(environment.apiBaseUrl + "user/logIn", request)
      .pipe(map(result => {
        if(result) {
          this.setUser(result)
          return result;
        }
        throw new Error("Could not login");
      }));
  }

  signup(request: UserSignUp){
    return this.httpClient
      .post<AuthenticationResponse>(environment.apiBaseUrl + "user/signUp", request)
      .pipe(map(result => {
        if(result) {
          this.setUser(result)
          return result;
        }

        throw new Error("Could not signup");
      }));
  }

  public setUser(user: AuthenticationResponse) {
    localStorage.setItem("user", JSON.stringify(user))
    this.userSubject.next(user);
  }

  public getUser(): AuthenticationResponse {
    try{
      return JSON.parse(localStorage.getItem("user") || '');
    }
    catch (e) {
      console.error("Could not parse user", e);
    }
    return {};
  }

  clearUser() {
    localStorage.removeItem("user");
    this.userSubject.next({});
  }

  // loggedInUser() :  Observable<UserDetails>{
  //   return this.httpClient.get<UserDetails>(environment.apiBaseUrl + "user/logged-in-user")
  // }


  // submitUpdatedUser(req : FormData): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'enctype': 'multipart/form-data' // Ensure correct content type
  //     })
  //   };
  //
  //   return this.httpClient.put(environment.apiBaseUrl + "user/update-profile", req, httpOptions);
  // }

}
