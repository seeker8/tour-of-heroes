import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/heroe';
import { HEROES } from '../mock-data/mock-heroes';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  hero : Hero= {
    id: 1,
    name: "Windstorm"
  };
  constructor() { }

  ngOnInit() {
  }

}
