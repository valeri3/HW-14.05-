import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp10',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './comp10.component.html',
  styleUrl: './comp10.component.css'
})
export class Comp10Component {

}
