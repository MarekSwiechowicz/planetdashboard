import { Component } from '@angular/core';
import { Planet } from 'src/app/models/planet';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planetdashboard',
  templateUrl: './planetdashboard.component.html',
  styleUrls: ['./planetdashboard.component.css'],
})
export class PlanetdashboardComponent {
  planets: Planet[] = [];
  constructor(private service: PlanetService) {}

  ngOnInit(): void {
    this.service.getAllPlanets().subscribe((data) => {
      this.planets = data;
      console.log(data);
    });
  }
}
