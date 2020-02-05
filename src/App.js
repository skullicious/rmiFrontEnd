import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Body from "./components/body/body";

function App() {
  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link
        href="https://cdn.jsdelivr.net/css-toggle-switch/latest/toggle-switch.css"
        rel="stylesheet"
      />

      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
