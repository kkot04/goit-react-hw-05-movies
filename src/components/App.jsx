import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {Layout} from './Layout/Layout.jsx'

export const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      
    </Routes>
    </>
  )
}