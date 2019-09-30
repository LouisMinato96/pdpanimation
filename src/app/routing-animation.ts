import {
   transition,
   trigger,
   query,
   style,
   animate,
   group,
   animateChild
} from '@angular/animations';

export const routeAccountAnimationsTime = '1s ease-in-out';

export const slideInAnimation =
   trigger('routeAnimations', [
       transition('Product => *', [
           style({ position: 'relative' }),
           query(':enter', style({ position: 'relative', width: '100%' }), { optional: true }),
           query(':leave', style({ position: 'fixed',top: '0px' ,width: '100%', height: '100%' }), { optional: true }),
           group([
               query(':enter', [
                   style({ transform: 'translateY(0vh)' }),
                   animate( routeAccountAnimationsTime , style({ transform: 'translateY(0vh)' }))
               ], { optional: true }),
               query(':leave', [
                   style({ transform: 'translateY(0vh)', zIndex:10000 }),
                   animate( routeAccountAnimationsTime , style({ transform: 'translateY(0vh)', zIndex:10000 }))
               ], { optional: true }),
           ])
       ]),
       transition('* => Product', [
           style({ position: 'relative' }),
           query(':enter', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
           query(':leave', style({ position: 'relative', width: '100%' }), { optional: true }),
           group([
               query(':enter', [
                   style({ transform: 'translateY(0vh)', zIndex:10000 }),
                   animate( routeAccountAnimationsTime , style({ transform: 'translateY(0vh)', zIndex:10000 }))
               ], { optional: true }),
               query(':leave', [
                   style({ transform: 'translateY(0vh)', zIndex:1 }),
                   animate( routeAccountAnimationsTime , style({ transform: 'translateY(0vh)', zIndex:1 }))
               ], { optional: true }),
           ])
       ])
       
   ]);
