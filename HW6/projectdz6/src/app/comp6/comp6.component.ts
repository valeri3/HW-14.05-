import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp6',
  standalone: true,
    imports: [
        ProductComponent
    ],
  templateUrl: './comp6.component.html',
  styleUrl: './comp6.component.css'
})
export class Comp6Component {

}
