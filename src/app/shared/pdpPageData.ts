import { Injectable } from '@angular/core'

@Injectable({
   providedIn: 'root'
 })
export class pdpPageData {
   
   private pdpIsopen: boolean = false;
   private pdpCardIndex: number = -1;
   private pdpProduct: string ; 

   constructor() {
      
      if(window.location.href.includes('/product/') ){
         //alert("pdp page refreshed \nInjectable initialised");
         this.pdpIsopen = true;
         this.pdpCardIndex = 1;
         this.pdpProduct = "product";
      }else{
         //alert("Injectable initialised");
      }
   }

   pdpOpened( cardIndex: number , product: string){
      this.pdpIsopen = true;
      this.pdpCardIndex = cardIndex;
      this.pdpProduct = product;
   }

   pdpClosed(){
      
      this.pdpIsopen = false;
      this.pdpCardIndex = -1;
      this.pdpProduct = undefined;
   }

   getPdpIsopen(){
      return this.pdpIsopen;
   }

   getPdpCardIndex(){
      return this.pdpCardIndex;
   }

   getPdpProduct(){
      return this.pdpProduct;
   }
   
   
}