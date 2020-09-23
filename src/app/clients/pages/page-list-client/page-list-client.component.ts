import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss'],
})
export class PageListClientComponent implements OnInit {
  private subscribtion: any;
  public headersClient: string[];
  public collectionClient: Client[];
  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.subscribtion = this.clientService.collection.subscribe((datas) => {
      datas.forEach((client) => {
        this.collectionClient = datas;
      });
    });
    this.headersClient = [
      'Nom',
      "chiffre d'affaire",
      'commentaire',
      'Etat',
      'TVA',
    ];
  }
}
