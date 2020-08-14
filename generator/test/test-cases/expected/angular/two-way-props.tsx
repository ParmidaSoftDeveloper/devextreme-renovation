import { Input, Output, EventEmitter } from "@angular/core";
class WidgetInput {
  @Input() height: number = 10;
  @Input() selected: boolean = false;
  @Output() selectedChange: EventEmitter<boolean> = new EventEmitter();
}

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
  template: `<span></span>`,
})
export default class Widget extends WidgetInput {
  __getHeight(): number {
    const { height } = this;
    const { height: _height } = this;
    return height + _height;
  }
  __getProps(): any {
    return {
      height: this.height,
      selected: this.selected,
      selectedChange: this._selectedChange,
    };
  }
  get __restAttributes(): any {
    return {};
  }

  _selectedChange: any;
  constructor(private changeDetection: ChangeDetectorRef) {
    super();
    this._selectedChange = (selected: boolean) => {
      this.selectedChange.emit(selected);
      this.changeDetection.detectChanges();
    };
  }
}
@NgModule({
  declarations: [Widget],
  imports: [CommonModule],
  exports: [Widget],
})
export class DxWidgetModule {}
