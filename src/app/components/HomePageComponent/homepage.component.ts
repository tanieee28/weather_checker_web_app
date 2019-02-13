import { Component, OnInit,  ViewChild } from '@angular/core';
import { RestService } from '../../services/RestServices/rest.service';
@Component({
    selector : 'home-page',
    templateUrl : './homepage.html',
    styleUrls : ['./homepage.css'],
    providers : [RestService]
})

export class HomePageComponent {
    

     responseText :  any = {
        'pressure':'',
        'lastUpdatedDate':'',
        'temperature':'',
        'humidity':'',
        'city':'',
        'partOfDay':'',
        'weatherType':''
    };
    searchText:Array<string>=['Pressure', 'LastUpdatedByProvider', 'Temperature', 'Humidity', 'DCQueryParam'];
    weatherData : any;
    constructor(private restService:RestService) {
        this.restService.getWeatherData().subscribe((data)=> {
           var response  = new String(data);
            this.responseText.pressure = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[0]))+7),4);
                console.log("Pressure is " + this.responseText.pressure);
            this.responseText.lastUpdatedDate = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[1]))+7),19);
                console.log("LastUpdatdData is " + this.responseText.lastUpdatedDate);
            this.responseText.temperature = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[2]))+7),5);
                console.log("Temperature is " + this.responseText.temperature);
            this.responseText.humidity = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[3]))+7),4);
                console.log("Humidity is " + this.responseText.humidity);
            this.responseText.city = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[4]))+7),9);
                console.log("City is " + this.responseText.city);
                let date = new Date();
                if(date.getHours()<12) {
                    this.responseText.partOfDay = 'Morning';
                }
                else if(date.getHours()<17) {
                    this.responseText.partOfDay = 'Afternoon';
                }
                else if(date.getHours()<19) {
                    this.responseText.partOfDay = 'Evening';
                }
                else {
                    this.responseText.partOfDay = 'Night';
                }
        });
        console.log("Pressure"+this.responseText.pressure);
    }
    getWeatherData() {
        let respObj = this.restService.getWeatherData();
         this.restService.getWeatherData().subscribe((data)=> {
           var response  = new String(data);
            this.responseText.pressure = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[0]))+7),4);
                console.log("Pressure is " + this.responseText.pressure);
            this.responseText.lastUpdatedDate = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[1]))+7),19);
                console.log("LastUpdatdData is " + this.responseText.lastUpdatedDate);
            this.responseText.temperature = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[2]))+7),5);
                console.log("Temperature is " + this.responseText.temperature);
            this.responseText.humidity = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[3]))+7),4);
                console.log("Humidity is " + this.responseText.humidity);
            this.responseText.city = response.substr((data.indexOf
                ('Known',data.indexOf(this.searchText[4]))+7),9);
                console.log("City is " + this.responseText.city);
        });
    }
}