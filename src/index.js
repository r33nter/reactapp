import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useState} from "react";
import App from "./App"
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/navbar';


ReactDOM.render(<App/>, document.getElementById("root"));
serviceWorker.unregister();
