import { AppSettings } from './../../models/appsetting';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  headers= new HttpHeaders()
     .set('Accept', 'application/json')

  sendPAN(PAN) {
    // console.log("sending Data", PAN)
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams =  urlSearchParams.append('pan', PAN);
    let jsonData = urlSearchParams.toString();
    // console.log("URL",baseURL)
    return this.http.post<any>(AppSettings.panDetails, jsonData, {withCredentials:true })
  }

  sendOTP(pan,email){
    // console.log("userdata", pan, email)
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams = urlSearchParams.append('email', email);
    urlSearchParams = urlSearchParams.append('pan' , pan)
    let jsonData = urlSearchParams.toString();
    // console.log("json", jsonData)

    return this.http.post<any>(AppSettings.sendOTP, jsonData, { withCredentials:true})
  }

  signin(email, OTP, bid) {
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams = urlSearchParams.append('email', email);
    urlSearchParams = urlSearchParams.append('otp', OTP);
    urlSearchParams = urlSearchParams.append('Bid' , bid)
    let jsonData = urlSearchParams.toString();
    // console.log("json", jsonData)
    return this.http.post<any>(AppSettings.signIn, jsonData, { observe:'response', withCredentials:true})  
    
  }

  signonhistory(bid) {
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams =  urlSearchParams.append('bid', bid);
    let jsonData = urlSearchParams.toString();
    // console.log("json", jsonData)
    return this.http.post<any>(AppSettings.signonhistory, jsonData, { observe:'response', withCredentials:true})  
    
  }
 

  // getpincodegst(email) {
  //   let urlSearchParams: HttpParams = new HttpParams();
  //   urlSearchParams =  urlSearchParams.append('email', email);
  //   let jsonData = urlSearchParams.toString();
  //   // console.log("json", jsonData)
  //   return this.http.post<any>(AppSettings.getgstpincode, jsonData, { observe:'response', withCredentials:true})  
    
  // }

  getgst(email) {
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams =  urlSearchParams.append('email', email);
    let jsonData = urlSearchParams.toString();
    // console.log("json", jsonData)
    return this.http.post<any>(AppSettings.getgst, jsonData, { observe:'response', withCredentials:true})  
    
  }
  getpincode(gst)
  {
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams =  urlSearchParams.append('gst', gst);
    let jsonData = urlSearchParams.toString();
    // console.log("json", jsonData)
    return this.http.post<any>(AppSettings.getpincode, jsonData, { observe:'response', withCredentials:true})  
   
  }
  
  sendEmail(Email) {
    // console.log("sending Data", PAN)
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams =  urlSearchParams.append('email', Email);
    let jsonData = urlSearchParams.toString();
    // console.log("URL",baseURL)
    return this.http.post<any>(AppSettings.panDetails, jsonData, {withCredentials:true })
  }

  sendEmaildemo(array) {
    // console.log("sending Data", PAN)
    let urlSearchParams: HttpParams = new HttpParams();
    array.forEach(feedback => {

      urlSearchParams = urlSearchParams.append('feedback', feedback);
    });
    let jsonData = urlSearchParams.toString();
    // console.log("URL",baseURL)
    return this.http.post<any>(AppSettings.panDetailsdemo, array, {withCredentials:true })
  }

  checkemailforinternalportal(email)
  {
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams = urlSearchParams.append('email', email);
    let jsonData = urlSearchParams.toString();
    // console.log("json", jsonData)
    return this.http.post<any>(AppSettings.verifyinternalportal, jsonData, { observe:'response', withCredentials:true})  
 
  }

  getportalType(email)
  {
    let urlSearchParams: HttpParams = new HttpParams();
    urlSearchParams = urlSearchParams.append('email', email);
    let jsonData = '';
    // console.log("json", jsonData)
    return this.http.post<any>(AppSettings.getportalTypeonemail, jsonData, { observe:'response', withCredentials:true})
  }

  logout()
  {
    
    return this.http.post<any>(AppSettings.logout, '', {withCredentials: true})
  }
}
