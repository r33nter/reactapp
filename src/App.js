import React from 'react';
import Counter from './components/navbar'
import  { useEffect, useState, Fragment} from 'react';
import './App.css';
import {MenuItem, FormControl, Select, Card, CardContent} from "@material-ui/core"
import InfoBox from "./InfoBox";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "./pages/countrypage";
import "./pages/homepage";
import MainPage from './pages/homepage';
function App(){
  
  
  return (
      <Router>
        <Route path ="/" component={MainPage}></Route>
      </Router>
  )
}
export default App;

