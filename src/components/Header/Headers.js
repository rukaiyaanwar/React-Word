import React from 'react';
import './Header.css';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';

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
                    <TextField id="filled-basic" label="Type Here" variant="filled" />
                    <TextField 
                    id="filled-select-currency" 
                    selectlabel="Select"
                    helperText="Please select your currency"
                    variant="standard"
                    >
                    <MenuItem>
                        English
                    </MenuItem>
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Headers
