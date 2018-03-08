import { customElement, bindable } from "aurelia-framework";

@customElement('sierpinski-triangle')
export class SierpinskiTriangle {

  @bindable()
  size: number;

  @bindable()
  x: number;

  @bindable()
  y: number;

  @bindable()
  text: string;
}
