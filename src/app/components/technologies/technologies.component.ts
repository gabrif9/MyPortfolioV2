import { Component } from '@angular/core';

export interface TechObject {
  icon: string,
  description: string,
  name: string
}

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  technologiesObject: TechObject[] = [
    {
      name: 'Angular',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/angular.svg'
    },
    {
      name: 'Typescript',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/Typescript.svg'
    },
    {
      name: 'TailwindCSS',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/tailwind.svg'
    },
    {
      name: 'NGINX',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/nginx.svg'
    },
    {
      name: 'Docker',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/docker.svg'
    },
    {
      name: 'Gitlab',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/gitlab.svg'
    },
    {
      name: 'PostgreSQL',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/postgresql.svg'
    },
    {
      name: 'CytoscapeJS',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/cytoscape.png'
    },
    {
      name: 'AWS',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/aws.svg'
    },
    {
      name: 'Cypress',
      description: "\
      Angular is an open-source framework for building web applications, primarily single-page applications.\
      During my work experience, i developed user interfaces to manage internal monitoring and orchestration tools.\
      In this framwork, i mainly used Reactive Forms to handle forms, Signals for change detection and i gained solid understanding of how components works.\
      I also learned how RxJS enables reactive programming, which i applied to create dynamic and responsive interfaces.\
      ",
      icon: 'tech-logo/cypress.svg'
    }
  ]

  

}
