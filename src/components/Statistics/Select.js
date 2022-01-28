import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectFilter, svgArrow } from './Statistics.styles';

export default function BasicSelect(props) {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <SelectFilter
                value={props.SelectName}
                onChange={handleChange}
                displayEmpty
                defaultValue={'month'}
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={svgArrow}
            >
                <MenuItem value="month">
                    <span className='selectName'>{props.selectName}</span>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </SelectFilter>
        </FormControl>
    );
}