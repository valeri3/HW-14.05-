import {Component} from '@angular/core';
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [
    ProductComponent
  ],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {

}
