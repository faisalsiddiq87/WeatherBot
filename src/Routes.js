import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Chats from './Chat/Chats';
import Notfound from './notfound';
import App from './App';

function Routes() 
{
   return (
      <Router>
         <div className="main">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">ChatBot</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/chats">Chat</Nav.Link>
               </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/chats" component={Chats} />
            <Route component={Notfound} />
            </Switch>
         </div>
      </Router>
   );
}

export default Routes;