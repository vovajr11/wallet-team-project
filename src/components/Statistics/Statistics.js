import React from "react";
import reactDom from "react-dom";
import { default as Chart } from "./Chart";
import { default as TableStatistics } from "./TableStatistics";
const Statistics = (props) => {
    return (
        <>
            <h2>
                Statistics
            </h2>
            <div>
                <Chart />
                <TableStatistics />
            </div>
        </>
    )
}

export default Statistics;