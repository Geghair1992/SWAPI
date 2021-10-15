import ReactDOM from "react-dom";
import './index.css'
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Characterspeo from "./components/charactersper/characterspeo";
import Charactersper from "./components/characterspeo/charactersper";
import Episode from "./components/episode/episode";
import Character from "./components/character/character";



const Wrapper = styled.div`
  width: 100%;
  display: flex;
`


const Index = () =>{
  return(
    <>
       <Header title="STAR WARS" name="Geghair Mahmoudi"/>
      <Wrapper>
        <Router>
          <Sidebar/>
          <Switch>
               <Route exact path="/" component={Main}/>
               <Route path="/episode" component={Episode}/>
               <Route path="/characterspeo" component={Characterspeo}/>
               <Route path="/charactersper" component={Charactersper}/>
               <Route path="/character" component={Character}/>
          </Switch>
        </Router>     
      
      </Wrapper>
    </>
  
  )
}

ReactDOM.render(<Index/>,document.querySelector("#root"))