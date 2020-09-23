import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss'],
})
export class PageListClientComponent implements OnInit {
  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.clientService.collection.subscribe((datas) => {
      console.log(datas);
    });
  }
  get clients() {
    return this.clientService.collection;
  }
}
