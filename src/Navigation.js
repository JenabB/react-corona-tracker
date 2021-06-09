import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { routes } from './routes.js';

export default function Navigation() {
  console.log(routes);
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div
          className=""
          style={{
            padding: '10px',
            width: '10%',

            height: '100vh',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <Link to="/" className="active:font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/statistic">Statistic</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1 }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
