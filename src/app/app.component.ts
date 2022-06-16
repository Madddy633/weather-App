import { Component, OnInit } from '@angular/core';
import { Root } from './models/fivedaymodel';

import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private weatherservice:ServiceService){}
  cityname:string='malappuram';

weatherdailyData?:Root
item=[0,8,16,24,32]
hourlyweather=[0,1,2,3,4,5,6,7]
 date:any
 data:any

  ngOnInit(): void {
    
    this.getdailyWeatherData(this.cityname)
    
    this.cityname='';
  }

  onsubmit(){
    
    this.getdailyWeatherData(this.cityname)
    
    this.cityname='';
   
  }

  
  private getdailyWeatherData(cityname:string){
    this.weatherservice.getdailyWeatherData(cityname)
    .subscribe({
      next:(resp)=>{
           this.weatherdailyData=resp;
        console.log(this.weatherdailyData);
        this.date=resp.city.timezone
         this.data=new Date();
         
        console.log(this.date);
        
      }
    })
  }


  //update array for 3 hour weather cast

  arrayupdate(i:number){

for(let k=0;k<8;k++)
{
this.hourlyweather[k]=i;
i++;
}

  }
  


}
