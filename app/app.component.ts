import {Component} from '@angular/core';
import {Hero} from './hero';
import {Heroes} from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/tmpl/app.component.html',
  styleUrls: ['app/css/app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  // hero:Hero = {
  //   id:1,
  //   name : 'Windstorm'
  // }
  heroes: Hero[] = Heroes.HEROES;

  constructor() {
    //this.heroes = Heroes.HEROES;
    console.log(this.heroes);
  }
}
