import React from 'react';
import { render } from 'react-dom';
import { Route} from 'react-router'
import { HashRouter } from 'react-router-dom'
import App from './App.js'

render(<HashRouter basename={process.env.PUBLIC_URL}>
       <Route exact path="/" component={App}/>
    </HashRouter>, document.getElementById('root'));
