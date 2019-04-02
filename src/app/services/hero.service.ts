import { Injectable } from "@angular/core";
import { Hero } from "../model/heroe";
import { HEROES } from "../mock-data/mock-heroes";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
