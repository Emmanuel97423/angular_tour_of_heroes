import { Component } from '@angular/core';
import { Hero } from '../types/hero';
import { HEROES } from '../../mock/mock-heros';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.sass'],
})
export class HereosComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
