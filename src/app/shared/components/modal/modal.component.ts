import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

@Input() title: string ="title model";
@Output() dismissed: EventEmitter<any> = new EventEmitter()  ;

constructor() { }

  ngOnInit(): void {
  }

public dismissedModal(){
  this.dismissed.emit();
}

}
