import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

const component = <Provider store={store}>
    <Router>
        <div>
            <Route path="/" exact={true} render={() => (<App/>)} />
            <Route path="/about" exact={true} render={() => (<div>WelCome About</div>)} />
            </div>
    </Router>
    
</Provider>

ReactDom.render(component, document.getElementById('app'));