import { Location } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../model/hero";
import { HeroService } from "../services/hero.service";

@Component({
  selector: "hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const ID = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(ID).subscribe(hero => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }
}
