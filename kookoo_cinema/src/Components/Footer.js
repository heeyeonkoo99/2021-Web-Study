import React from "react";
import styled from "styled-components";
import {MistyRose} from "../Style";



export const FooterPositioner = styled.footer`
  margin-top: ${(props) => props.margin ? 0 : "80px"};
  position: relative;
  width: 100%;
  /* height: 250px; */
  background-color: ${MistyRose};
  z-index: 995;
`;

export const Container = styled.div`
  
  width: 1080px;
  margin: 0 auto;
  font-size: 0.813em;
  letter-spacing: -0.5px;
  padding: 45px 0 60px;
`;


const Footer=()=>(
    <FooterPositioner>
        <Container>
            @KOOKOO CINEMA.
        </Container>
    </FooterPositioner>
)


export default Footer;

