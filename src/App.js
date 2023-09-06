import React , {useState} from 'react'
import ReactDOM from "react-dom/client";
import "../index.css";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import Store from './utils/store';
import ThemeContext from './context/ThemeContext';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <React.Fragment>
     <Provider store={Store}>

       <ThemeContext.Provider value={{darkMode,setDarkMode}}>
             <Header/>
             <Todos/>
              <Footer/>
      </ThemeContext.Provider>
       </Provider>

    </React.Fragment>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
