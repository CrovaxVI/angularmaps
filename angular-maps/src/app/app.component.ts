import { Component } from '@angular/core';
import { Point } from 'src/models/point.model';

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
  latT:number=45.05;
  lngT:number=7.666667;
  latV:number= 45.4299000;
  lngV:number=10.9844400;
  latB:number= 45.5630400;
  lngB:number=8.0579600;

  icon =  {
    url:'./assets/img/cat_acrobat.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }
  icon1 =  {
    url:'./assets/img/bandiera.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }
  icon2 =  {
    url:'./assets/img/soldi.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }
  icon3 =  {
    url:'./assets/img/blu.ico',
    scaledSize: {
      width: 60,
      height: 60
    }
  }
    color:string;
    colorR:string;
  constructor(){}
  onClickRed():boolean  {
    this.color="red";
    return false
  }
  onClickBlu():boolean  {
    this.color="blue";
    return false
  }
  onClickVerde():boolean  {
    this.color="green";
    return false
  }


   onClickRectGiallo():boolean  {
    this.colorR="yellow";
    return false
  }
   onClickRectBlu():boolean  {
    this.colorR="blu";
    return false
  }
   onClickRectRosa():boolean  {
    this.colorR="pink";
    return false
   }

  triangle: Array<Point> =
  [
    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]
rettangolo: Array<Point> =
  [
    {lng:9.2, lat:45.6},
    {lng:9.2, lat:45.5},
    {lng:9.6, lat:45.5},
    {lng:9.6, lat:45.6}

  ]
  };


