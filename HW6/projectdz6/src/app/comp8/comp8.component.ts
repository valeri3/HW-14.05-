import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp8',
  standalone: true,
    imports: [
        ProductComponent
    ],
  templateUrl: './comp8.component.html',
  styleUrl: './comp8.component.css'
})
export class Comp8Component {

}
