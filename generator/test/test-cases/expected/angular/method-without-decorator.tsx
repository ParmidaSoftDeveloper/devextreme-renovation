class WidgetInput {}

import {
  Component,
  NgModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "dx-widget",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div></div>`,
})
export default class Widget extends WidgetInput {
  private __privateMethod(a: number): any {}
  __method1(a: number): void {
    return this.__privateMethod(a);
  }
  __method2(): null {
    return null;
  }
  get __restAttributes(): any {
    return {};
  }

  constructor(private changeDetection: ChangeDetectorRef) {
    super();
  }
}
@NgModule({
  declarations: [Widget],
  imports: [CommonModule],
  exports: [Widget],
})
export class DxWidgetModule {}
