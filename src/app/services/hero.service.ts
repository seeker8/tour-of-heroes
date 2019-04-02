import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HEROES } from "../mock-data/mock-heroes";
import { Hero } from "../model/heroe";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  }
}
