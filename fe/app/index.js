import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/main/App';
import './style.css'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Bill from './js/bill/testBill';
import Home from './js/main/Home';
import Usage from './js/usage/testusage';
import Product from './js/Product/testproduct';

ReactDOM.render(
   <Router history={browserHistory}>
     <Route path="/" component={App}>
       <IndexRoute component={Home}/>
       <Route path="/usage" component={Usage}/>
       <Route path="/product" component={Product}/>
       <Route path="/bill" component={Bill}/>
     </Route>
   </Router>,
   document.getElementById('react')
 );