import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/Order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public form: FormGroup;
  @Input() public order = new Order();
  public states = Object.values(StateOrder);
  @Output() clicked: EventEmitter<Order> = new EventEmitter();

  constructor(private formB: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formB.group({
      tjmHt: [this.order.tjmHt, Validators.compose([Validators.required, Validators.minLength(2)])],
      nbJours: [this.order.nbJours],
      tva: [this.order.tva],
      state: [this.order.state],
      client: [
        this.order.client,
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      comment: [this.order.comment, Validators.minLength(2)],
      id: [this.order.id],
      typePresta: [this.order.typePresta],
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
