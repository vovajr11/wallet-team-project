import React from "react";
import reactDom from "react-dom";
import { default as Chart } from "./Chart";
import { default as TableStatistics } from "./TableStatistics";
const Statistics = (props) => {
    return (
        <section style={{ padding: '30px 0 0 30px' }}>
            <h2>
                Statistics
            </h2>
            <div>
                <Chart />
                <TableStatistics />
            </div>
        </section>
    )
}

export default Statistics;