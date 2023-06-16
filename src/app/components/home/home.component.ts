import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`)
  constructor(){
    console.log(this.images)
  }
}
