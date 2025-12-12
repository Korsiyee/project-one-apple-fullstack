/*//1 react functional component
import React from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import YouTubeVideos from "./components/YouTube/YouTubeVideos";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";


function App() {
  return (

    
    <div>
      <Header />
      <Section/>
     <YouTubeVideos/>
      <Footer/>

    
    </div>
  );
}
export default App;*/



//this is react route which used to make the react to have(route to) multiple page 

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

// ✅ CAPITALIZED imports and usage MUST match


import Mac from "./components/pages/Mac/Mac";
import Iphone from "./components/pages/Iphone/Iphone";
import Ipad from "./components/pages/Ipad/Ipad";
import Watch from "./components/pages/Watch/Watch";
import Tv from "./components/pages/Tv/Tv";
import Music from "./components/pages/Music/Music";
import Support from "./components/pages/Support/Support";
import Four04 from "./components/pages/Four04/Four04";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="/tv" element={<Tv/>}/>
        <Route path="/music" element={<Music/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="*" element={<Four04/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;


      









/*
//2 react class component

import React, {component} from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";



class App extends component {
render(){
  return (
    <div>
      <Header />
      <Section/>
      <Footer/>
    
    </div>
  );}

}
export default App;*/ 


/*
// About props
class App extends component {
render(){
  return (
    <li className="Header-item">
      <a className="Header-link  js-scroll-trigger" href={this.props.linkUrl}>
        {this.props.linkName}
      </a>

    </li>

  );}

}
export default App;*/
