import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp4',
  standalone: true,
    imports: [
        ProductComponent
    ],
  templateUrl: './comp4.component.html',
  styleUrl: './comp4.component.css'
})
export class Comp4Component {

}
