import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-list',
  template: `
    <p>
        history list is working

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
