import {  NgbModal, NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, TemplateRef, ViewChild  } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/clients/services/clients.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public client$: Observable<Client>;
  public modalValues: Client;
  @ViewChild('addClientModal') addClientModalRef: TemplateRef<any>;
  private currentActiveModal: NgbModalRef;

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private currentRoute: ActivatedRoute,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {}
  public openaddModal(values: any){
    this.modalValues = values;
    this.currentActiveModal = this.modalService.open(this.addClientModalRef);

  }
  public dismissModal(){
    console.log(this.currentActiveModal)
    this.currentActiveModal.dismiss();
  }

  public addClient(client: Client) {
    this.clientService.addClient(client).subscribe(
      (response) => {
      // this.router.navigate(['clients']);
      this.dismissModal();
      this.router.navigate(['../'], { relativeTo: this.currentRoute });

    });
  }
}
