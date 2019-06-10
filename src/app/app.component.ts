import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusSearchService } from './bus-search.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
    constructor( private BusSearchService : BusSearchService){}


    onGet(){ 
        this.BusSearchService.getServers()
          .subscribe(
            (response)=> console.log(response), 
            (error)=> console.log(error),  
        
          );
            

    
    }
   
  }
