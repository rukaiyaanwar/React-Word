import React from 'react';
import './Header.css';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import category from "../../data/category";

const Headers = () => {
    const darkTheme = createTheme({
        palette: {
            primary : {
                main: '#fff',
            },
            mode: 'dark',
        },
    });
    return (
        <div className="header">
            <span className="header__title">React Word</span>
            <div className="header__inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                    <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    
                    helperText="Please select your currency"
                    variant="standard"
                    >
                    {category.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Headers
