function viewModel() { }
function view() {}

import { Component, NgModule, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "dx-widget"
})
export default class DxWidgetComponent {
    @Input() pressed?: boolean;
    @Output() pressedChange: EventEmitter<boolean> = new EventEmitter();

    updateState():void {
        this.pressedChange.emit(this.pressed = !this.pressed);
    }

    _viewModel: any;
    ngDoCheck() { 
        this._viewModel = viewModel({
            props: {
                pressed: this.pressed,
                pressedChange: this.pressedChange
            },
            updateState: this.updateState
        });
    }
}

@NgModule({
    declarations: [DxWidgetComponent],
    imports: [
        CommonModule
    ],
    exports: [DxWidgetComponent]
})
export class DxWidgetModule { }