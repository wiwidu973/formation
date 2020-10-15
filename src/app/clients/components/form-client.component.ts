import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class ComponentsComponent implements OnInit {

  public form: FormGroup;
  @Input() public client = new Client();
  public states = Object.values(StateClient);
  @Output() clicked: EventEmitter<Client> = new EventEmitter();

  constructor(private formB: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formB.group({
      ca: [this.client.ca],
      tva: [this.client.tva],
      state: [this.client.state],
      client: [
        this.client.name,
        Validators.compose([Validators.required]),
      ],
      comment: [this.client.comment, Validators.minLength(2)],
      id: [this.client.id],

    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      alert('veuillez remplir le champ requis');
    } else {
      this.clicked.emit(this.form.value);
    }

  }

}
