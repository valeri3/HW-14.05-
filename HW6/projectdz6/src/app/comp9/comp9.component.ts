import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp9',
  standalone: true,
    imports: [
        ProductComponent
    ],
  templateUrl: './comp9.component.html',
  styleUrl: './comp9.component.css'
})
export class Comp9Component {

}
