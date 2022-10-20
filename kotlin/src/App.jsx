import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./search";


import HistoryKotlin from "./assets/components/HistoryKotlin";
import BooleanType from "./assets/components/BooleanType";
import ArrayType from "./assets/components/ArrayType";
import ArrayPrimType from "./assets/components/ArrayPrimType";
import Operation from "./assets/components/Operation";
import JVM from "./assets/components/jvm";
import StringType from "./assets/components/String";
import Permanent from "./assets/components/Permanent";
import Literal from "./assets/components/Literal";
import Point from "./assets/components/Point";
import Integer from "./assets/components/Integer";
import IsKotlin from "./assets/components/IsKotlin";
import Transform from "./assets/components/Transform";

import "./assets/styles/App.css";

function App() {

  const arrRoute = [
    {path: "/iskotlin", el: <IsKotlin />},
    {path: "/kotlin", el: <HistoryKotlin />},
    {path: "/boolean", el: <BooleanType />},
    {path: "/array", el: <ArrayType />},
    {path: "/arrayprim", el: <ArrayPrimType />},
    {path: "/operation", el: <Operation />},
    {path: "/jvm", el: <JVM />},
    {path: "/string", el: <StringType />},
    {path: "/permanent", el: <Permanent />},
    {path: "/literal", el: <Literal />},
    {path: "/point", el: <Point />},
    {path: "/integer", el: <Integer />},
    {path: "/transform", el: <Transform />},
  ]


  return (

    <Router>
      
      <div className="container">
        
        <Search />
                  
        <Routes>
          {arrRoute.map(item => <Route path={item.path} element={item.el} />)}      
        </Routes>
      </div>


    </Router>
  );
}

export default App;
