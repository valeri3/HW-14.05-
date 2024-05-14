import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp7',
  standalone: true,
    imports: [
        ProductComponent
    ],
  templateUrl: './comp7.component.html',
  styleUrl: './comp7.component.css'
})
export class Comp7Component {

}
