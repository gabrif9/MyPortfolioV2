import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-tech-bubble',
  imports: [],
  templateUrl: './tech-bubble.component.html',
  styleUrl: './tech-bubble.component.css'
})
export class TechBubbleComponent {

  bubbleNameInput = input<string[]>()
  bubbleNames: string[] = []

  constructor(){
    effect(() => {
      if(this.bubbleNameInput() != undefined){
        this.bubbleNames = this.bubbleNameInput()!
      }
    })
  }

}
