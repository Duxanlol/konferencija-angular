import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let authReq = request;
      const token = localStorage.getItem("token");
      if (token != null) {
      authReq = request.clone({
        headers: request.headers.set("Authorization", 'Bearer ' + token)
      });
      console.log("Added token.", token);
    }
    console.log('Making a request to', request.url);
    return next.handle(authReq);
  }



}
