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
                        opacity: 0.0,
                        width: '99%',
                        color: 'white'
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0, width: '99%', color: 'white' })
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0, width: '99%', color:'white' }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0, width:'100%', color:'black' }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
            // About page to about page
            transition('AboutPage <=> HomePage', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        opacity: 0.0,
                        width: '99%',
                        color: 'white'
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0, width: '99%', color: 'white' })
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0, width: '99%', color:'white' }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0, width:'100%', color:'black' }))
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
                        opacity: 0.0,
                        width: '99%',
                        color: 'white'
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0, width: '99%', color: 'white' })
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0, width: '99%', color:'white' }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0, width:'100%', color:'black' }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
            transition('ContactPage <=> HomePage', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        opacity: 0.0,
                        width: '99%',
                        color: 'white'
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0, width: '99%', color: 'white' })
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0, width: '99%', color:'white' }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0, width:'100%', color:'black' }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
            transition('ContactPage <=> FeaturesPage', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        opacity: 0.0,
                        width: '99%',
                        color: 'white'
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0, width: '99%', color: 'white' })
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0, width: '99%', color:'white' }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0, width:'100%', color:'black' }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
            transition('ContactPage <=> AboutPage', [
                style({ position: 'relative' }),
                query(':enter, :leave', [
                    style({
                        position: 'absolute',
                        opacity: 0.0,
                        width: '99%',
                        color: 'white'
                    })
                ]),
                query(':enter', [
                    style({ opacity: 0.0, width: '99%', color: 'white' })
                ]),
                query(':leave', animateChild()),
                group([
                    query(':leave', [
                        animate('1000ms ease-out', style({ opacity: 0.0, width: '99%', color:'white' }))
                    ]),
                    query(':enter', [
                        animate('1000ms ease-out', style({ opacity: 1.0, width:'100%', color:'black' }))
                    ])
                ]),
                query(':enter', animateChild()),
            ]),
        ])
    ]
})
export class AppComponent {
  title = 'Azariel Technologies';
  collapsed = false;
  constructor() {
  }
  prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  switchCollapsed() {
    this.collapsed = !this.collapsed;
  }
  turnOffCollapsed() {
    this.collapsed = false;
  }
}
