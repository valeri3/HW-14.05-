import { Component } from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp5',
  standalone: true,
    imports: [
        ProductComponent
    ],
  templateUrl: './comp5.component.html',
  styleUrl: './comp5.component.css'
})
export class Comp5Component {

}
