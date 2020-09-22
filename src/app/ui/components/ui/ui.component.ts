import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {


    @Input() public title: string;
    public menuOpen:boolean;
  constructor() { }

  ngOnInit(): void {
      this.title = "test d'un titre";
      this.menuOpen=false;
  }

public toggleMenu(){
// if (this.menuOpen ===true){
//   this.menuOpen=false
// }else{
//   this.menuOpen=true;
// }
this.menuOpen=!this.menuOpen;

}











}
