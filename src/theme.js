const { createTheme } = require("@mui/material");


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#60A5FA',
            main: '#3B82F6',
            dark: '#2563EB',
            contrastText: '#fff'
        },
        secondary: {
            main: '#F43F5E',
            light: '#FB7185',
            dark: '#E11D48',
            contrastText: '#fff'
        },
        success: {
            main: '#22C55E',
            light: '#86EFAC',
            dark: '#15803D',
            contrastText: '#fff'
        },
        error: {
            main: '#EF4444',
            light: '#FCA5A5',
            dark: '#B91C1C',
            contrastText: '#fff'
        }
    }
})

export default theme