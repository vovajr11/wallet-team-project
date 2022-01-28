import React from 'react';
import { default as BasicSelect } from "./Select";
import { SelectsContainer } from "./Statistics.styles"


const TableStatistics = () => {
    return (
        <SelectsContainer>
            <BasicSelect selectName="Month" />
            <BasicSelect selectName="Year" />
        </SelectsContainer>
    )
}

export default TableStatistics;



