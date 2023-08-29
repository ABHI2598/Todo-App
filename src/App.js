import React from 'react'
import ReactDOM from "react-dom/client";
import "../index.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
       <Header/>
       <Todos/>
    </React.Fragment>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
