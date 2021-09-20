import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Box from './box/box';
import Menu from './menu/menu';
import Stats from './stats/stats';
import Footer from './footer/footer';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
    <div>     
        <div className='navbar'><NavBarContainer /></div>
        <div className="Bundle">
        <div className='bundle-menu'><Menu /></div>        
        <div className='bundle-box'><Box/></div>     
        <div className='bundle-stats'><Stats/></div>
      </div>
      <div className='footer'><Footer/></div>
        <Switch>
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;