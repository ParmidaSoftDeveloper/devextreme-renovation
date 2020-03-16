import { OneWay, JSXComponent, Component, ComponentBindings, Slot } from "../../../component_declaration/common";

function view() { }

@ComponentBindings()
export class WidgetProps { 
    @OneWay() height?: number = 10;
    @Slot() children?: any;
}

@Component({
    view: view
})
export default class Widget extends JSXComponent<WidgetProps> {
    onClick() { 
        const v = this.props.height;
    }
}
