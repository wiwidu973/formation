import { Component,OnDestroy, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Router } from '@angular/router';
import { ClientsService } from '../../services/clients.service';
import { Subject } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss'],
})
export class PageListClientComponent implements OnInit, OnDestroy {
  private subscribtion: any;
  public headersClient: string[];
  public collectionClients$: Subject<Client[]> = new Subject();
  public states = Object.values(StateClient);

  constructor(private clientsService: ClientsService, private router: Router) {}

  ngOnInit(): void {
    this.clientsService.collection.subscribe((collection) => {
      this.collectionClients$.next(collection);
    });

    this.headersClient = [
      'Nom',
      "chiffre d'affaire",
      'commentaire',
      'TVA',
      'Etat',

    ];
  }

  public changeState(item: Client, event) {
    this.clientsService
      .changeState(item, event.target.value)
      .subscribe((result) => {
        item.state = result.state;
      });
  }
  ngOnDestroy(): void {}

  public testButton() {
    alert('click sur le bouton');
  }
  public testButton2() {
    alert('click sur le bouton');
  }
  public edit(item: Client) {
    this.router.navigate(['clients', 'edit', item.id]);
  }
  public deleteItem(item: Client) {
    this.clientsService.deleteClient(item).subscribe((Response) => {
      this.clientsService.collection.subscribe((collection) => {
        this.collectionClients$.next(collection);
      });
    });
  }
}
