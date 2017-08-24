import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';

// Component
import Profile from './components/profile';
import Post from './components/post';
import PostItem from './components/post_items';
import NotFound from './components/404';
class App extends Component{
    render(){
        return(
            <div>
                <div>Home</div>
            </div>
        );
    };
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
                <NavLink to="/" activeStyle={{color: 'red'}} activeClassName="selected">Home</NavLink><br/>
                <Link to="/post">Post</Link><br/>
                <Link to="/post/48">Post Item</Link><br/>
                <Link to="/profile">Profile</Link><br/>
            </header>
            <hr/>
            <h2>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/post" component={Post}></Route>
                <Route path="/post/:id" component={PostItem}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
            </h2>
        </div>
    </BrowserRouter>,
     document.querySelector("#root"));