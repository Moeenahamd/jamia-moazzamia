import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
	//images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`)
  
  images = [
    "assets/images/img1.png",
    "assets/images/img2.png",
    "assets/images/img3.png",
   
];
  img1="assets/images/img1.png"
  img2="assets/images/img2.png"
  /*img1="assets/Images/book1.png"
  img2="assets/Images/book2.png"
  img3="assets/Images/book3.png"
  img4="assets/Images/book4.png"
  img5="assets/Images/book5.png"
  img6="assets/Images/book6.png"*/
  constructor(){
    console.log(this.images)
  }
}
