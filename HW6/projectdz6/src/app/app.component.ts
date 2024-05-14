import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Comp1Component} from "./comp1/comp1.component";
import {Comp2Component} from "./comp2/comp2.component";
import {Comp3Component} from "./comp3/comp3.component";
import {Comp4Component} from "./comp4/comp4.component";
import {Comp5Component} from "./comp5/comp5.component";
import {Comp6Component} from "./comp6/comp6.component";
import {Comp7Component} from "./comp7/comp7.component";
import {Comp8Component} from "./comp8/comp8.component";
import {Comp9Component} from "./comp9/comp9.component";
import {Comp10Component} from "./comp10/comp10.component";
import {MainbodyComponent} from "./mainbody/mainbody.component";
import {ProductComponent} from "./product/product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
    Comp7Component,
    Comp8Component,
    Comp9Component,
    Comp10Component,
    MainbodyComponent,
    ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectdz6';
}
