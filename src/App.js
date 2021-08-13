import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Header from "./Components/Header";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets";
import Login from "./Components/Login"
import { useStateValue } from './StateProvider';


function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? ( 
      <Login /> 
        ) :(
        <div>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>      
        </div>
      )}   
    </div>
  );
}

export default App;

