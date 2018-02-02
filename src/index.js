import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import {Route, Router} from 'react-router-dom';
import createBrowserHistory from "history/createBrowserHistory";
import CreateItem from './CreateItem'
import itemInfo from './itemInfo'
import NoMatch from './components/noMatch'



const history = createBrowserHistory();

ReactDOM.render(
    <Router history = {history}>
        <div>
            <Route exact path = "/sayer/" component = {Main} />
            <Route path = "/sayer/create" component = {CreateItem} />
	        <Route path = "/sayer/show/:id" component={itemInfo} />
        </div>
    </Router>,


    document.getElementById('root'));
registerServiceWorker();
