import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() images: string[] = [];

  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

}
