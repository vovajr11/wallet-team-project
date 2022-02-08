import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectFilter, svgArrow } from './Select.style';
import axios from 'axios';

export default function BasicSelect(props) {

    const handleChange = (event) => {
        props.func(event.target.value);
    };

    const renderOptions = (arr) =>
        arr.map(elem => (
            <MenuItem key={elem} value={elem}>
                <span className='selectName'>{elem}</span>
            </MenuItem>
        ))

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <SelectFilter
                value={props.SelectName}
                onChange={handleChange}
                displayEmpty
                defaultValue={""}
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={svgArrow}
                renderValue={(selected) => {
                    if (selected.length === 0) {
                        return <span className='selectName'>{props.selectName}</span>;
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