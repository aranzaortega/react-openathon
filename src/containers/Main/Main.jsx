/* Main.jsx */
import React from 'react';
import './Main.css';
import { Switch, Route } from "react-router-dom";
import { Home, Services, Innovation, Guestbook, NotFound } from "../../containers";

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/innovation" component={Innovation} />
                    <Route path="/guestbook" component={Guestbook} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default Main;
