import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import Box from './box/box';
import Menu from './menu/menu';
import Stats from './stats/stats';
import Footer from './footer/footer';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import DeckFormContainer from './deck/deck_form_container';
import DeckIndexContainer from './deck/deck_index_container';
import SplashPageContainer from './splash_page/splash_page_container';


const App = () => (
     <div>     
        <div className='navbar'><NavBarContainer /></div>
        <Route exact path ="/splash" component={SplashPageContainer}/>
        <Switch>
        {/* typing page */}
            <Route exact path="/type">
                <div className="Bundle">
                    <div className='bundle-menu'><Menu /></div>
                    <div className='bundle-box'><Box /></div>
                    <div className='bundle-stats'><Stats /></div>
                </div>
            </Route>

            <Route exact path='/decks_index' component={DeckIndexContainer} />
            
            {/* Renders form to submit decks */}
            <Route exact path="/decks" component={DeckFormContainer} />
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>

        {/* <div className='footer'><Footer /></div> */}
    </div>
);

export default App;