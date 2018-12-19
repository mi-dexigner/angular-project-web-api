import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Blogger';
   constructor(private titleService: Title,public router: Router) {}
   ngOnInit() {
    this.titleService.setTitle(this.title);
   }
   
}
