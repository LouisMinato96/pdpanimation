import { Component, OnInit } from '@angular/core';
import { pdpCardAnimation } from '../shared/pdpCardAnimationFile';
import { pdpPageData } from '../shared/pdpPageData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [pdpCardAnimation]
})
export class HomeComponent implements OnInit {

  productCardList: Array<string> = [
    "The Traveller 3.0 old",
    "The Discoverer 2.0 old",
    "The Navigator 4.0",
    "Pure White",  
    "Grey Melange",
    "Navy Blue",
    "Evergreen Black",
    "Majestic Maroon",
    "The Discoverer",
    "Vasco",
    "Wozniak",
    "Buzz",
    "Troy",
    "Marco",
    "The Explorer",
    "Andersson",
    "Columbus",
    "Magellan",
    "Francis White",
    "The Sand Sculptor",
    "Club DJ",
    "The Voyager",
    "Vega",
    "Steven",
    "Essential Pulse",
    "Essential Glider",
    "Essential Dart",
    "Classic Bolt",
    "Classic Speed",
    "Aldrin"
  ];



  constructor(
                private pdpDataObg: pdpPageData
            ) { }

  ngOnInit() {
    this.check_pdpIsOpen();
  }
  
  check_pdpIsOpen(){
    if( this.pdpDataObg.getPdpIsopen() ){
      this.pdpDataObg.pdpClosed();
    }
  }

}