import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forest from '../components/Forest';
import Basket from '../components/Basket';

export default function Routes({ mushrooms, basket }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Forest mushrooms={mushrooms}/>} />
      <Route exact path='/forest' component={() => <Forest mushrooms={mushrooms} />} />
      <Route exact path='/basket' component={() => <Basket basket={basket}mushrooms={mushrooms}/>} />
      <Route component={() => <Forest mushrooms={mushrooms}/>}/>
    </Switch>
  );
}
