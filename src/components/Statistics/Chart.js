import React from "react";
import reactDom from "react-dom";

const Chart = (props = { name: "Vlad", age: 18, }) => {
    return (
        <div>
            {props.name} = {props.age} years old
        </div>
    )
}
export default Chart;