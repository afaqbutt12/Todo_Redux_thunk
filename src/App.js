// import React from 'react'
import List from "./Component/List/List";
import Todoo from "./Component/Todoo/Todoo";
import { Provider } from 'react-redux';
import "./Component/Todoo/Style.css";
import { useState } from "react";
import store from "./Component/Redux/Store";
// import Store from "./Component/Context/Store";

function App() {
  const [update, setUpdate] = useState(false);
  const toupdate = () => setUpdate((value) => !value);
  return (
    <>
    <Provider store={store}>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/logo.svg" alt="my Logo" />
            <figcaption>Add your List Here ✌</figcaption>
          </figure>
          <Todoo toupdate={toupdate} />
          <List
          checkUpdate={update}
            toupdate={toupdate}
          />
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
