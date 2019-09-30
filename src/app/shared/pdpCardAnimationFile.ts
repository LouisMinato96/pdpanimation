import {
   animate,
   state,
   keyframes,
   query,
   style,
   transition,
   trigger,
   stagger,
   sequence
 } from '@angular/animations';
 
 export const pdpCardAnimation =
   trigger('pdpCardAnimation', [
     state(
       'initial',
       style( {
         width: '25%' ,height: '300px',position: 'absolute' , top: '{{y_value}}', left: '{{x_value}}', zIndex: 500
       }),
       { params: { x_value: '0%', y_value: "0px" }} 
     ),
     state(
       'final',
       style( {
         width: '50%' ,height: '100%',position: 'absolute' , top: '0px', left: '0px', zIndex: 1000
       }),
       { params: { x_value: '0%', y_value: "0px" }} 
     ),
     transition( 
       'initial => final' ,
       animate( '1s 0s', keyframes([
         style({ width: '25%' ,height: '300px',position: 'absolute' , top: '{{y_value}}', left: '{{x_value}}', zIndex: 1000 }),
         style({ width: '100%' ,height: '100%',position: 'absolute' , top: '0px', left: '0px', zIndex: 1000 }),
         style({ width: '50%' ,height: '100%',position: 'absolute' , top: '0px', left: '0px', zIndex: 1000 }),
       ]),
       ),
       { params: { x_value: '0%', y_value: "0px" }} 
     ),
     transition( 
       'final => initial' ,
       animate( '1s 0s', keyframes([
         style({ width: '50%' ,height: '100%',position: 'absolute' , top: '0px', left: '0px', zIndex: 1000 }),
         style({ width: '100%' ,height: '100%',position: 'absolute' , top: '0px', left: '0px', zIndex: 1000 }),
         style({ width: '25%' ,height: '300px',position: 'absolute' , top: '{{y_value}}', left: '{{x_value}}', zIndex: 1000 }),
       ])
     ),
     { params: { x_value: '0%', y_value: "0px" }} 
     )
   ]);
 