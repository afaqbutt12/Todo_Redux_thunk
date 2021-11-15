// import React from 'react'
import List from "./Component/List/List";
import Todoo from "./Component/Todoo/Todoo";
import { Provider } from 'react-redux';
import "./Component/Todoo/Style.css";
import store from "./Component/Redux/Store";

function App(): JSX.Element {

  return (
    <> 
    <Provider store={store}>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/logo.svg" alt="my Logo" />
            <figcaption>Add your List Here ✌</figcaption>
          </figure>
          <Todoo/>
          <List/>
        </div>
      </div>
      </Provider>
    </>
  );
}

export default App;
