import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-list',
  template: `
    <p>
       

        <app-bus-history> </app-bus-history>
    </p>
  `,
  styles: []
})
export class HistoryListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
