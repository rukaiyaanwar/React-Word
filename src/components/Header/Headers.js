import React from 'react';
import './Header.css';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import categories from "../../data/category";

const Headers = ({ setCategory, category, word, setWord }) => {
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
                    <TextField 
                        className="header__search" 
                        label="Search a word" 
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        variant="standard"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Headers
