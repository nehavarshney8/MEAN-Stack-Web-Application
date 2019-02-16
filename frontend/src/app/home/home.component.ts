import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';
import { Destination } from '../destination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //array of destinations
  destinations: Array<Destination>;
  //var for searched destination
  searchedDest :Destination;
  //boolean var to condtionally display single destination or collection of destinations
  isSingleDestination: boolean = false;

  constructor(private _destinationService: DestinationService) { }

  ngOnInit() {
    this._destinationService.getDestinations()
      .subscribe(res => this.destinations = res);
  }

  //on click event handler of search button on home page to return searched destination based on title
  searchDestination(title: string): Destination {
    this.isSingleDestination = true;
    this.searchedDest = this.destinations
      .filter(searchedDest => searchedDest.title === title)
      .pop();
    return this.searchedDest;
  }

}
