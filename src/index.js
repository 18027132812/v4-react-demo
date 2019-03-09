import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './index.css';
import routers from './routers/routers';
import * as serviceWorker from './serviceWorker';
import './mock/mock';

export default class My extends Component {
  render(){
    return (
      <Router>
        <div>
          {/*使用 Switch 才能识别 NotFind 配置 404 跳转*/}
          <Switch>
            {
              routers.map((route,index) => {
                return(
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}/>
                )
              })
            }
            {/*<Route path="/" exact component={App} />*/}
            {/*<Route path="/login" exact component={Login} />*/}
            {/*<Route path="/shop" exact component={Shop} />*/}
            {/*<Route path="/detail/:id" component={Detail} />*/}
            {/*<Route path="/buy/:id" exact component={Buy} />*/}
            {/*<Route path="/user" exact component={User} />*/}
            {/*<Route path="/user/text" exact component={Text} />*/}
            {/*<Route component={NotFind} />*/}
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<My />, document.getElementById('root'));
serviceWorker.unregister();
