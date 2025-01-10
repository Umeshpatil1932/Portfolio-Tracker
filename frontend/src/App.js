import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StockForm from './components/StockForm';
import StockList from './components/StockList';

function App() {
  return (
    <Router>
      <div>
        <h1>Portfolio Tracker</h1>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/stocks" component={StockList} />
          <Route path="/add-stock" component={StockForm} />
          <Route path="/edit-stock/:id" component={StockForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;