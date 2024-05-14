import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp3',
  standalone: true,
    imports: [
        ProductComponent
    ],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component {

}
