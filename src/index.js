import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
    primary1Color: '#000d2a',
    primary2Color: '#293453',
    primary3Color: '#000000',
    accent1Color: '#e2b216',
    },
});

const Index = () => {
    return (
        <BrowserRouter>
            <MuiThemeProvider muiTheme={muiTheme} >
                <Container />
            </MuiThemeProvider>
        </BrowserRouter>
    );
};

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
