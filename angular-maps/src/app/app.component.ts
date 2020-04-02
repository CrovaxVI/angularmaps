import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  lat: number = 45.506738;
  lng: number = 9.190766;
  lati:number=45.5048616;
  lngi:number=9.1850903;
  icon =  {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  };


}