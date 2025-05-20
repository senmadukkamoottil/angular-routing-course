import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private readonly router: Router) {

    this.router.events.subscribe(response => {
      if (response instanceof NavigationStart) {
        console.log('Navigation started')
      }
    })

  }

  ngOnInit() {

  }

  onActivate(event: any) {
    console.log('Activated route', event);
  }
}
