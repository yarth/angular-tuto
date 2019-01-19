import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero:Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // }  
  heroes: Hero[];

  selectedHero: Hero;
 
  constructor(
    private heroService: HeroService,
    public  messageService: MessageService,
    ) { }
 
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add("on vient de sélectionner: "+hero.id+" "+hero.name);
  }
  
}
