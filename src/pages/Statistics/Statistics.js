import axios, { Axios } from "axios";
import ReactDom from "react-dom";
import React from "react";
import { Statistics } from '../../components/Statistics';
const StatisticsPage = (props) => {
    return (
        <>
            <h2>
                Statistics view
            </h2>
            <Statistics />

        </>
    )
};


export default StatisticsPage;
