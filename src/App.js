import React from 'react'
import ReactDOM from "react-dom/client";
import "../index.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import Store from './utils/store';


function App() {
  return (
    <React.Fragment>
     <Provider store={Store}>

       <Header/>
       <Todos/>

       </Provider>

    </React.Fragment>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
