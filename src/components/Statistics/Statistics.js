import React from "react";
import reactDom from "react-dom";
import { default as Chart } from "./Chart/Chart";
import { default as TableStatistics } from "./TableStatistics/TableStatistics";
const Statistics = (props) => {
    return (
        <section >
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