import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.scss']
})
export class HeroFormTemplateComponent implements OnInit {

  hero: Hero

  constructor() {
    this.hero = {
      name: 'Bijay Kumar Yadav'
    }
  }

  ngOnInit() {
  }

}
