import { Component } from '@angular/core';

@Component({
  selector: 'app-root',            // The HTML tag used to render this component
  templateUrl: './app.component.html',  // The path to the HTML template file
  styleUrls: ['./app.component.css']   // The path to the CSS file (optional)
})
export class AppComponent {
  title = 'My Angular App';  // A simple property to bind in the template

  // You can define any methods you need for the component here
  constructor() {
    // Initialization code goes here
  }

  // You can use lifecycle hooks, like ngOnInit, for initialization logic
  ngOnInit(): void {
    // Code to run when the component is initialized
  }
}
