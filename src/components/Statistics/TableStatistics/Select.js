import React from 'react';
import FormControl from '@mui/material/FormControl';

import { SelectFilter, svgArrow, Option } from './Select.style';

export default function BasicSelect(props) {

    const handleChange = (event) => {
        props.func(event.target.value);
    };

    const renderOptions = (arr) =>
        arr.map((elem, index) => (
            <Option key={elem} value={elem}>
                {elem}
            </Option >
        ))

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <SelectFilter
                value={props.SelectName}
                onChange={handleChange}
                displayEmpty
                disabled={!props.options?.length ? true : false}
                defaultValue={""}
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={svgArrow}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return props.selectName;
                    }
                    else
                        return selected
                }}
            >
                {renderOptions(props.options)}
            </SelectFilter>
        </FormControl >
    );
}