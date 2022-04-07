import React from "react";
import { Header } from "../components";
import styled from 'styled-components'

const bckground = require(`../assets/images/back8.jpg`)

const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={`content bg-cover bg-no-repeat w-screen h-screen relative bg-center`} style={{backgroundImage: `url(${bckground})`}}>
          <StyledOverlay className={`w-full h-full absolute`}>

          </StyledOverlay>
      </div>
    </div>
  );
};

export default Homepage;

const StyledOverlay = styled.div`
  background-color: rgba(0,0,0,0.3)
`


