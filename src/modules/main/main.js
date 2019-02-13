import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from '../shared/components/header';
import UserList from '../users/user-list';
import User from '../users/user/user-form';
import UserDetail from '../users/user/user-detail/user-detail';

const Main = () => (
  <div className="main">
    <Header />
    <Switch>
      <Route exact path="/app/v1/users" component={UserList} />
      <Route exact path="/app/v1/users/user" component={User} />
      <Route exact path="/app/v1/users/:id" component={UserDetail} />
      <Route exact path="/app/v1/users/:id/edit" component={User}/>
    </Switch>
  </div>
);

// const Main = () => (
//   <div className="App">
//   <Header />
//   <Router>
//     <div>
//       <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
//       <OldSchoolMenuLink to="/app/v1/users" label="Usuários" />
//       <hr />
//       <Route exact path="/" component={Home} />
//       <Route path="/app/v1/users" component={UserList} />
//     </div>
//   </Router>
//   </div>
// );

// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route
//     path={to}
//     exact={activeOnlyWhenExact}
//     children={({ match }) => (
//       <div className={match ? "active" : ""}>
//         {match ? "> " : ""}
//         <Link to={to}>{label}</Link>
//       </div>
//     )}
//   />
// );

export default Main;