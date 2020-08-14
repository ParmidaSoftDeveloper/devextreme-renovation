import { Input } from "@angular/core";
class WidgetInput {
  @Input() prop1?: number;
  @Input() prop2?: number;
}

import {
  Component,
  NgModule,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "dx-widget",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div #divRef></div>`,
})
export default class Widget extends WidgetInput {
  @ViewChild("divRef", { static: false }) divRef!: ElementRef<HTMLDivElement>;
  getHeight(p: number = 10, p1: any): string {
    return `${this.prop1} + ${this.prop2} + ${this.divRef.nativeElement.innerHTML} + ${p}`;
  }
  getSize(): string {
    return `${this.prop1} + ${this.divRef.nativeElement.innerHTML}`;
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
