import { Component, signal } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-header',
  imports: [MenuComponent, SidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showSidebarSignal = signal(false)

  toggleSidebar(event: string){
    this.showSidebarSignal.update(() => !this.showSidebarSignal())
    if(event != '') {
      console.log(document.getElementById(event))
      document.getElementById(event)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
    }
  }

}
