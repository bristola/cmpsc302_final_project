import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, animate, style, query, animateChild, group } from '@angular/animations'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('routeAnimations', [
            // Home page to home page
            transition('FeaturesPage <=> AboutPage', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        opacity: 0.0
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0})
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0 }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0 }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
            // About page to about page
            transition('About <=> HomePage', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        opacity: 0.0
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0})
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0 }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0 }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
            // Features page to about page
            transition('FeaturesPage <=> HomePage', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        opacity: 0.0
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0})
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0 }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0 }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
        ])
    ]
})
export class AppComponent {
  title = 'Azariel Technologies';
  constructor() {
  }
  prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
