import { Component,OnInit } from '@angular/core';
import { RouterOutlet,Router,NavigationEnd } from '@angular/router';
import {Title} from '@angular/platform-browser'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Handicap';
  constructor(
    private router: Router,
    private titleService: Title,
  ) {
    this.titleService.setTitle(this.title);
    // iconSet singleton
  }

  ngOnInit(): void {
    let x = 0;
    if (x == 1) {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
      });
    }else{

    }
  }
}
