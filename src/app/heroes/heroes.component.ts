import { Component, OnInit } from "@angular/core";
import { Hero } from "../model/hero";
import { HeroService } from "../services/hero.service";

@Component({
  selector: "heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }
}
