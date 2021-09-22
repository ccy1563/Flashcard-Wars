import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import BoxContainer from './box/box_container';

import Menu from './menu/menu';
import Stats from './stats/stats';
import Footer from './footer/footer';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import DeckFormContainer from './deck/deck_form_container';

import DeckIndexContainer from './deck/deck_index_container'
import UserProfileContainer from './user_profile/user_profile_container';
import FlashcardFormContainer from './flashcard/flashcard_form_container'
import FlashcardIndexContainer from './flashcard/flashcard_index_container'
import SplashPageContainer from './splash_page/splash_page_container';
import Rightmenu from './rightmenu/rightmenu';


import DeckShowContainer from './deck/deck_show_container';

import CommentFormContainer from './comment/comment_form_container';
import CommentIndexContainer from './comment/comment_index_container';




const App = () => (
     <div className='whole-div'>     
        <div className='navbar'><NavBarContainer /></div>
        
        <Route exact path ="/splash" component={SplashPageContainer}/>
        <Switch>
        {/* typing page */}
            <Route exact path="/practice/deck/:deckId">
                <div className="Bundle">
                    <div className='bundle-menu'><Menu /></div>
                    <div className='bundle-box'><BoxContainer/></div>
                    <div className='bundle-stats'><Rightmenu /></div>
                </div>
            </Route>
            
            <Route exact path='/decks/:deckId' component={DeckShowContainer}/>

            <Route exact path='/decks_index' component={DeckIndexContainer} />
            
            {/* // Renders form to submit decks */}

            {/* // User page */}
            <Route exact path="/user" component={UserProfileContainer} />
            {/* // Page to insert card into deck from user page */}
            <Route exact path ="/comment/user/:userId/deck/:deckId/create" component={CommentFormContainer} />
            <Route exact path="/flashcard/user/:userId/deck/:deckId/create" component={FlashcardFormContainer} />
            {/* // Renders form to submit decks from user page */}
            <Route exact path="/decks" component={DeckFormContainer} />
            {/* // Renders all flashcards in a deck from user page */}
            <Route exact path='/comments/deck/:deckId' component = {CommentIndexContainer} />
            <Route exact path="/flashcard/deck/:deckId" component={FlashcardIndexContainer} />
            


            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>

        {/* <div className='footer'><Footer /></div> */}
    </div>
);

export default App;