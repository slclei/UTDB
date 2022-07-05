import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Wellmap } from "./basemap/Basemap";

class App extends React.Component {
  state = {
    data: null,
  };

  
  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("http://localhost:6123/api");
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  addButton=async(e: React.MouseEvent<HTMLElement>)=>{
    const response = await fetch("/api");
    const body = await response.json();
    this.setState({data: body.express});
    console.log(body);
    return;

  }

  public render() {
    return (
      <div>
        <p className="App-intro">{this.state.data+"test"}</p>
        <button onClick={(e: React.MouseEvent<HTMLElement>) => this.addButton(e)}>Get from api</button>
        <Wellmap />
      </div>
    );
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
