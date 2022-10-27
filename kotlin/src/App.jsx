import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./search";

import {arrRoute} from "./source";

//Импорт стилей ко всем компонентам
import "./assets/styles/App.css";

function App() {

  // Здесь генерируется массив объектов, берущий данные из файла source.jsx
  const route = arrRoute.map((item) => {
    return item;
  })

  //Здесь генеририруются все компоненты
  return (

    <Router>
      
      <div className="container">
        
        <Search />

        <Routes>
          {route.map((item, i) => <Route key={i} path={item.path} element={item.el} />)}      
        </Routes>
      </div>


    </Router>
  );
}

export default App;
