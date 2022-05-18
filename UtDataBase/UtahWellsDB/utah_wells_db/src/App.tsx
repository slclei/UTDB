import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from "react-router-dom";
import Boreholes from "./elements/WellsList";
import {Layout} from "./layout/Layout";
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
import {Wellmap} from './basemap/Basemap';


class App extends React.Component {
    
    public render() {
        return (
        <div className="well-map-wrapper">
                <Wellmap />
        </div>);
        /*
        return (
            <div>
                 <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/boreholes"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/boreholes/4304120208"} className="nav-link">
                boreholes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
                <div>
                <Routes>
                    <Route path="/boreholes/4304120208" element={<Boreholes/>}/>
                </Routes>
                </div>
            </div>
        );*/
    }
}

export default App;

