import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { AboutComponent } from "./components/about/about.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomeComponent, TechnologiesComponent, ExperienceComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myPortfolioV2';
}
