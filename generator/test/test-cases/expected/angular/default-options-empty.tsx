import "typescript";

function view() { }
export class WidgetProps {}

import { Component, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { convertRulesToOptions, Rule } from "../../../../../../component_declaration/default_options"
type WidgetOptionRule = Rule<WidgetProps>;

const __defaultOptionRules: WidgetOptionRule[] = [{ device: true, options: {} }];
export function defaultOptions(rule: WidgetOptionRule) {
    __defaultOptionRules.push(rule);

}
@Component({ selector: "dx-widget" })
export default class Widget extends WidgetProps {
    get restAttributes(){
        return {}
    }
    constructor() {
        super()
        const defaultOptions = convertRulesToOptions(__defaultOptionRules);
        for (let option in defaultOptions) {
            this[option] = defaultOptions[option];
        }
    }
}
@NgModule({
    declarations: [Widget],
    imports: [
        CommonModule
    ],
    exports: [Widget]
})
export class DxWidgetModule { }