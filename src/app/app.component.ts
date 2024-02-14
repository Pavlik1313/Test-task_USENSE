import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControlsModule} from "./form-controls/form-controls.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormControlsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
