import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Root } from '../models/fivedaymodel';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  

//Request to weather api 


getdailyWeatherData(cityname:string):Observable<Root>{
  return this.http.get<Root>(environment.weatherapidailyurl,{
     headers:new HttpHeaders()
   
     .set(environment.XRapidAPIKeyheader,environment.XRapidAPIKeyvalue)
     .set(environment.XRapidAPIHostheader,environment.XRapidAPIHostvalue),
     
     
     params:new HttpParams()
     .set('q',cityname)
     .set('units','metric')
     .set('mode','json')
   })
 }


}
