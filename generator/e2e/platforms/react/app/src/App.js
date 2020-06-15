import React, { useState } from 'react';
import App from '../../../../components/app.tsx';
import ButtonWithTemplate from "../../../../components/button-with-template.tsx"
import Counter from "../../../../components/counter.tsx"

const buttonTemplate = ({ text }) => <div style={{border: "1px solid blue"}}>
    {text+"!"}
</div>

export default () => {
    const [counterValue, counterValueChange] = useState(15);
    return (<div>
        <App></App>
        <ButtonWithTemplate
            text={"With Template"}
            render={buttonTemplate}
        ></ButtonWithTemplate>

        <ButtonWithTemplate
            text={"Without Template"}
        ></ButtonWithTemplate>

        <form>
            <Counter id="counter-control" value={counterValue} valueChange={counterValueChange}></Counter>
        </form>
        <div id="counter-form-value">{counterValue}</div>
    </div>);
}