import { Component } from '@angular/core';
import {RouterOutlet,RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './mainbody.component.html',
  styleUrl: './mainbody.component.css'
})
export class MainbodyComponent {

}
