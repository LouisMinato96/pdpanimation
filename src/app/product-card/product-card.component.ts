import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { pdpCardAnimation } from '../shared/pdpCardAnimationFile';
import { Router } from '@angular/router';
import { pdpPageData } from '../shared/pdpPageData';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  animations: [pdpCardAnimation]
})
export class ProductCardComponent implements OnInit, OnDestroy {

  cardIndex: number = -1;
  product: string = undefined;
  cardState: string = 'initial';

  pdpPageCardIndex = -1;

  @Input() set setcardIndex(setcardIndex:number){
    this.cardIndex = setcardIndex;
  }

  @Input() set setproduct(setproduct:string){
    this.product = setproduct;
  }


  constructor(
                private router: Router,
                private pdpDataObg: pdpPageData
              ) {   }

  ngOnInit() {
    this.check_pdpIsOpen();
  }

  check_pdpIsOpen(){
    if( this.pdpDataObg.getPdpIsopen() ){
      this.cardIndex = this.pdpDataObg.getPdpCardIndex();
      this.product = this.pdpDataObg.getPdpProduct();
      setTimeout( ()=>{
        this.pdpPageCardIndex = this.pdpDataObg.getPdpCardIndex();
      },100 );
    }
  }

  pdpCardAnimationStart( cardIndex:number ){
    console.log("Animation Start");
  }

  getPdpCardAnimationState( cardIndex:number ) {

    console.log(this.cardIndex , cardIndex , this.cardIndex === cardIndex);
    if( cardIndex === this.pdpPageCardIndex ){
      return 'final';
    }else{
      return 'initial';
    }

  }

  getCardXYparam( cardIndex:number ){

    let x_coordinate_Card =  Math.floor((25*cardIndex)%100) ;
    let y_coordinate_Card =  (Math.floor(cardIndex/4)*300) ;

    let CardXYparam = {
      x_value: x_coordinate_Card,
      y_value: y_coordinate_Card
    };

    //console.log(CardXYparam);

    return CardXYparam;
  }

  pdpCardClicked( cardIndex:number , product:string ){
    
    if( this.pdpDataObg.getPdpIsopen() ){
      this.pdpDataObg.pdpClosed();
      this.pdpPageCardIndex = this.pdpDataObg.getPdpCardIndex();
      setTimeout( ()=>{
        window.history.go(-1);  
      },100 );
      
    }else{
      this.pdpDataObg.pdpOpened( cardIndex , product );
      this.router.navigate(['/product', cardIndex ]);
    }
  }

  ngOnDestroy(): void {

    if( !window.location.href.includes('product') && this.pdpDataObg.getPdpIsopen() ){
      this.pdpDataObg.pdpClosed();
      this.pdpPageCardIndex = this.pdpDataObg.getPdpCardIndex();
    }
    
  }

}
