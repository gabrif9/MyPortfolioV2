import { Component } from '@angular/core';
import { TechBubbleComponent } from "../tech-bubble/tech-bubble.component";

@Component({
  selector: 'app-experience',
  imports: [TechBubbleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  bubbleTech: string[] = [
    "Angular",
    "Typescript",
    "Keycloak",
    
  ]

}
