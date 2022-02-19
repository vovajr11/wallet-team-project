import React from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js"
import { ChartContainer, TotalBalance } from "./Chart.style";

Chart.register(ArcElement);

const ChartComponent = (props) => {

    const dataArr = props.transactionsArr.map(elem => elem.total);
    const labelsArr = props.transactionsArr.map(elem => elem.name);

    const data = {
        labels: labelsArr,
        datasets: [
            {
                label: "transactions",
                data: dataArr,
                backgroundColor: props.bgColors,
                borderWidth: 0,
            },
        ],

    };

    const options = {
        maintainAspectRatio: true,
        legend: {
            display: true,
            position: "left",
            backgroundColor: "red"
        },
        cutout: 115
    };



    return (
        <ChartContainer>
            <TotalBalance >
                ₴ {props.totalForPeriod}
            </TotalBalance>
            <Doughnut
                data={data}
                options={options}
            >
            </Doughnut>
        </ChartContainer>
    )
}
export default ChartComponent;
