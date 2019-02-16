import { Component } from '@angular/core';
 import { } from '@types/googlemaps';
 import { ViewChild } from '@angular/core';
 import { Attraction } from './attraction';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;



  // ngOnInit() {
  //  var mapProp = {
  //    center: new google.maps.LatLng(73, 73.8143),
  //    zoom: 15,
  //    mapTypeId: google.maps.MapTypeId.ROADMAP
  //    };
  //   this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  // }
  title = 'app';
}
