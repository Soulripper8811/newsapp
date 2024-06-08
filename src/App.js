import {  } from '@chakra-ui/react'
import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'

const App = () => {
  return (
    <>
  <Router>
    <Header/>
    <Routes>
      <Route exact path={"/"} element={<Home  key={"/"}category={"general"}/>}/>
      <Route exact path={"/Home"} element={<Home key={"general"} category={"general"}/>}/>
      <Route exact path={"/business"} element={<Home key={"business"} category={"business"}/>}/>
      <Route exact path={"/entertainment"} element={<Home key={"entertainment"} category={"entertainment"}/>}/>
      <Route exact path={"/health"} element={<Home key={"health"} category={"health"}/>}/>
      <Route exact path={"/science"} element={<Home key={"science"} category={"science"}/>}/>
      <Route exact path={"/sports"} element={<Home key={"sports"} category={"sports"}/>}/>
      <Route exact path={"/technology"} element={<Home key={"technology"} category={"technology"}/>}/>
    </Routes>


  </Router>
    
    </>
  )
}

export default App