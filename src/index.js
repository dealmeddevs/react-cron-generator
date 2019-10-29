import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from '@material-ui/styles'
import  CssBaseline from '@material-ui/core/CssBaseline'
import theme from './muiTheme'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </ThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();