import React from 'react';
import { render } from 'react-dom';
import { Switch , Route} from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './App.js'

render(<Provider>
	<BrowserRouter>
	  <Switch>
        <Route exact path="/" component={App}/>
     </Switch>
    </BrowserRouter>
	</Provider>, document.getElementById('root'));
