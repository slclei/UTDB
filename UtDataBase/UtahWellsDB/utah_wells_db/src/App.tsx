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
      .then((res) => this.setState({ data: res.success }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch(
      "https://by0dhye7tl.execute-api.us-west-1.amazonaws.com/staging/server"
    );
    const body = await response.json();
    console.log(body.success);

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  addButton = async (e: React.MouseEvent<HTMLElement>) => {
    const response = await fetch(
      "https://by0dhye7tl.execute-api.us-west-1.amazonaws.com/staging/server"
    );
    const body = await response.json();
    this.setState({ data: body.success });
    console.log(body);
    return;
  };

  public render() {
    return (
      <div>
        <Wellmap />
      </div>
    );
  }
}

export default App;
