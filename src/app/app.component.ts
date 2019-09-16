import { Component } from '@angular/core';
import {GeneralService} from './general.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'Qr-code';
  url : string ='';
  

constructor(private service : GeneralService){
   this.url = 'http://goggle.com';


}









}
