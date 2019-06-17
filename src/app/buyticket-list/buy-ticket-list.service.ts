import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BuyTicketListService {

  constructor(private http: HttpClient) { }


  urlToPost = 'localhost://'

  postDataToServer(){
      return this.http.post(this.urlToPost)
        .subscribe(
          (response) => console.log(response),
              (error) => console.log(error)
              
        )
  }
}
