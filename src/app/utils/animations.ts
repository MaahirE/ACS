import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

export class Animations {
    public static fadeIn = trigger('fadeIn', [
        transition(':enter', [style({ opacity: 0 }), animate('0.5s ease-in', style({ opacity: 1 }))])
    ]);
    public static fadeOut = trigger('fadeOut', [
        transition(':leave', animate('0.5s ease-out', style({ opacity: 1 })))
    ]);
    public static stagger = trigger('stagger', [
        transition('* => *', [
            query(':enter', [style({ opacity: 0 }), stagger(100, [animate('0.2s  ease-in', style({ opacity: 1 }))])], {
                optional: true
            })
        ])
    ]);
}