import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './routing-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'ccollectionPdpAnimation';

  lastScrollPosition = 0;
  lastRouteState = "";
  scrollForRouteAnimation = 0;

  checkScroll(){
    setInterval( ()=> {
      this.lastScrollPosition = window.scrollY;
    },200);
  }

  getState(o: RouterOutlet) {

    let animationState = o && o.activatedRouteData && o.activatedRouteData['animation'];

    if( this.lastRouteState !== animationState ){
      this.lastRouteState = animationState;
      switch( animationState ){
        case 'Cart': this.scrollForRouteAnimation = this.lastScrollPosition;
          break;
        default: window.scroll(0,this.scrollForRouteAnimation);
      }
      //alert( "SCROLL POSITION"+ this.scrollForRouteAnimation + "\tSTATE" +animationState);
    }
     
    return {
      value: animationState,
      params: { topPixel: this.scrollForRouteAnimation }
    };
  }
}
