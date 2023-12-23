import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";
import {Layout} from './Layout/Layout.jsx'
import { Home } from "pages/Home/Home.jsx";


// const Home = lazy(() => import('pages/Home/Home.jsx'))

export const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route index element={<Home/>} />
    </Routes>
    </>
  )
}