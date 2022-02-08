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
                backgroundColor: [
                    "#FED057",
                    "#FFD8D0",
                    "#FD9498",
                    "#C5BAFF",
                    "#6E78E8",
                    "#4A56E2",
                    "#81E1FF",
                    "#24CCA7",
                    "#00AD84",
                ],
                borderWidth: 1,
            },
        ],
    };

    console.log(props.transactionsArr.map(elem => elem.total));

    return (
        <ChartContainer>
            <TotalBalance >
                ₴ {props.totalForPeriod}
            </TotalBalance>
            <Doughnut
                data={data}
            >
            </Doughnut>
        </ChartContainer>
    )
}
export default ChartComponent;