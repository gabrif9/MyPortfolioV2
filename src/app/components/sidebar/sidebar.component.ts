import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, effect, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translateX(0%)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate(100%)'
        })
      ),
      transition('in => out', [animate('300ms ease-in-out' )])
    ])
  ]
})
export class SidebarComponent {

  closeSidebarOutput = output<string>()
  isVisibleInputSignal = input<boolean>(false)
  isVisible = false

  constructor(){
    effect(() => {
        this.isVisible = this.isVisibleInputSignal()
    })
  }

  scrollTo(section: string) {
    this.closeSidebarOutput.emit(section)
  }

  onAnimationDone(event: AnimationEvent) {
    this.isVisible = event.toState === 'in';
  }
}
