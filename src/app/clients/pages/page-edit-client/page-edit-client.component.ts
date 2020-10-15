
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Client } from 'src/app/shared/models/Client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {

  public client$: Observable<Client>;
  public modalValues: Client;
  @ViewChild('updateClientModal') updateClientModalRef: TemplateRef<any>;
  private currentActiveModal: NgbModalRef;

  constructor(
    public clientServie: ClientsService,
    public currentRouter: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
  ) {

   }


  ngOnInit(): void {
    this.client$ = this.client$ = this.currentRouter.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.clientServie.getById(params.get('id'));
      })
    );
  }

  public openUpdateModal(values: any){
    this.modalValues = values;
    this.currentActiveModal = this.modalService.open(this.updateClientModalRef);

  }
  public dismissModal(){
    console.log(this.currentActiveModal)
    this.currentActiveModal.dismiss();
  }

  public edit(item: Client) {
    this.clientServie.updateClient(item).subscribe(
      (result) => {
        this.dismissModal();
      this.router.navigate(['clients']);
    });
  }

}
