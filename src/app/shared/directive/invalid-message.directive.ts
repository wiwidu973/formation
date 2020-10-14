import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[invalidMessage]'
})
export class InvalidMessageDirective implements OnInit {

    @Input() invalidMessage: string;
    public control: AbstractControl;
    public controlValue$: Observable<any>;
    public controlSubscription: Subscription;
  constructor(
    private _fg: ControlContainer,
    private _render: Renderer2,
    private _el:ElementRef
    ) { }

ngOnInit(){
this.control = this.form.get(this.invalidMessage);
this.controlValue$ = this.control.valueChanges;
this.controlSubscription=this.controlValue$.subscribe(
  () => {
    this.setVisible
  }
)
}

private setVisible(){
  if(this.control.invalid){
    this._render.removeStyle(this._el.nativeElement, 'display');
  }else{
    this._render.setStyle(this._el.nativeElement, 'display', 'none');

  }
}
  get form(){
    return this._fg.formDirective ? (this._fg.formDirective as FormGroupDirective).form : null

  }
match(error: string){
  if(this.control && this.control.errors){
    if(Object.keys(this.control.errors).indexOf(error) > -1){
      return true

  }
}
  return false
};


ngOnDestroy(){
  this.controlSubscription.unsubscribe();
}


}
