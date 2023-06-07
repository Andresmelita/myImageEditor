import { Component, Input, DoCheck} from '@angular/core';
import { RemoveBackGroundComponent } from '../components/remove-back-ground/remove-back-ground.component';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements DoCheck {
  public letsGo: boolean = false;

  letsGoClick(){
    this.letsGo = true
  }
  ngDoCheck(): void {
    this.letsGo
  }
  dataImage:any = []
  addItem(){
    this.dataImage.push(localStorage.getItem('currentImage'))
  }
  panelOpenState = false

}
